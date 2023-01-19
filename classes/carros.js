class Carro {
    constructor(marca, modelo, cor, ano) {
        this.modelo = modelo;
        this.marca = marca;        
        this.cor = cor;
        this.ano = ano;
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade++;
    }
    freiar() {
        this.velocidade--;
    }
    mostrar() {
        console
        .log('O carro ' + this.modelo + ' está a ' + this.velocidade + ' Km/h');
        console.log(`${this.modelo} está a ${this.velocidade} Km/h`)
    }
}

let uno = new Carro('Fiat', 'Uno', 'branco', 2000);
uno.mostrar();
uno.acelerar();
uno.mostrar();