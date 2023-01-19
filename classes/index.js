// Classe de Pessoa
// Permite criar objetos de pessoa, que tem nome e ano de nascimento
// class é o comando para criar classes
// Nomes de classes começam em maiúscula
class Pessoa {
    constructor(nome, anoDeNascimento) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
    }
    calcularIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

// Criando objetos a partir da classe Pessoa
// Instanciar (criar) objetos
// new - é o comando para criar/construir/instanciar um novo objeto
let marcus = new Pessoa('Marcus', 2007);
let mauricio = new Pessoa('Maurício', 1987);
let carlos = new Pessoa('Carlos', 1996);

console.log(marcus, marcus.calcularIdade());
console.log(mauricio, mauricio.calcularIdade());
console.log(carlos, carlos.calcularIdade());

