class ClienteEspecial extends Cliente{

    private _dependentes: Clientes;

    constructor(nome: string , cpf: string, conta: Conta ) {
        super(nome,cpf,conta)
        this._dependentes = new Clientes();

    }

    get dependentes(){
        return this._dependentes;
    }

    set dependentes(dependentes: Clientes){
        this._dependentes = dependentes;
    }

    inserirDependente (cliente : Cliente) : void {
        this._dependentes.inserir(cliente);
    }

    removerDependente (cpf: string) : void {
        this._dependentes.remover(cpf);
    }

    listarDependentes () : Array<Cliente> {
        return this._dependentes.listar();
    }

    pesquisarDependente (cpf : string) : Cliente {
        return this._dependentes.pesquisar(cpf);
    }

    


}