class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Clientes();
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(dependentes) {
        this._dependentes = dependentes;
    }
    inserirDependente(cliente) {
        this._dependentes.inserir(cliente);
    }
    removerDependente(cpf) {
        this._dependentes.remover(cpf);
    }
    listarDependentes() {
        return this._dependentes.listar();
    }
    pesquisarDependente(cpf) {
        return this._dependentes.pesquisar(cpf);
    }
}
