let contaController = new ContaController();

contaController.listar();

const clientes = new Clientes();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cl1 = new Cliente('Manuel','123.123.123-12',c1);

const teste1 = JSON.parse(JSON.stringify(clientes.listar()));
console.table(teste1);
clientes.inserir(cl1);
const teste2 = JSON.parse(JSON.stringify(clientes.listar()));
console.table(teste2);
clientes.remover(cl1.cpf);
const teste3 = JSON.parse(JSON.stringify(clientes.listar()));
console.table(teste3);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

/*
const teste = clientes.listar();
console.table(teste);
clientes.inserir(cl1);
const teste2 = clientes.listar();
console.table(teste2);
clientes.remover(cl1.cpf);
const teste3 = clientes.listar();
console.table(teste3);


3. Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar, 
remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado) */