class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private clientes: Clientes;

    constructor() {

        this.clientes = new Clientes();
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCPF =
            <HTMLInputElement>document.querySelector("#CPF");        
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#numero");
        this.inputSaldo =
        <HTMLInputElement>document.querySelector("#saldo");
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const novaConta = new Conta(this.inputNumero.value,
            parseFloat(this.inputSaldo.value))
        let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, novaConta);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}
