let pessoa = {
    nome: "Diego",
    anoNascimento: 1987,
    getIdade() {
        return new Date().getFullYear() - this.anoNascimento
    }
};

console.log(pessoa.getIdade());

class Carro {
    constructor(ano, modelo) {
        this.ano = ano;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade++
    }

    freiar() {
        this.velocidade--;
    }
}

let uno = new Carro(2000, "uno");
console.log(uno.velocidade);
uno.acelerar();
uno.acelerar();
console.log(uno.velocidade);