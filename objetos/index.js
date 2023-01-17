// Programação
//  Paradigmas de programação
//  Paradigma é uma forma de pensar para resolver o problema
//  
//  Paradigma Procedural
//      Pensa em uma sequencia de passos / procedimentos
//          Fazer café
//          1. Abre o pacote
//          2. Esquenta a água
//          3. ......
//  
// Funcional - Mais parecido com matemática
// OO - Orientação a Objetos

let nome = 'Marcus';
let anoDeNascimento = 2007;
let cpf = '123.456.789-10'

let nome2 = 'Maurício';
let anoDeNascimento2 = 2000;
let cpf2 = '123';

let nome3 = 'Diego';
let anoDeNascimento3 = 2000;
let cpf3 = '123';

// Array
let nomes = ['Marcus', 'Maurício'];
let nascimentos = [2007, 2000];
let cpfs = ['123', '456'];

// Haveria alguma forma elegante de guardar diversas informações todas juntinhas
// num lugar só????????

// Objeto

let marcus = {
    nome: 'Marcus',
    anoDeNascimento: 2007,
    calcularIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

let mauricio = {
    nome: 'Maurício',
    anoDeNascimento: 2000
};

console.log(marcus);
console.log(mauricio);

// Objeto é uma variável com várias coisas
// Propriedades/atributos: são cada uma das informações que estão dentro do objeto
// anoDeNascimento é um atributo do objeto marcus
// Objetos podem ter funções/métodos
//      Funções ou métodos são ações que podemos executar


console.log(marcus.calcularIdade());
console.log(marcus.anoDeNascimento);

// console.log(mauricio.calcularIdade());
// Não funciona pois essa função existe apenas no objeto marcus

// Exemplo - um carro
// Ano, Modelo, Velocidade, Acelerar, Freiar

let carro = {
    ano: 2005,
    marca: 'Fiat',
    modelo: 'Uno',
    velocidade: 0,
    estaLigado: false,
    acelerar() {
        if (this.estaLigado == false) {
            console.log('Precisa ligar o carro antes de acelerar');
            return;
        }
        this.velocidade++;
    },
    freiar() {
        if (this.estaLigado == false) {
            console.log('Precisa ligar o carro antes de freiar');
            return;
        }
        this.velocidade--;
    },
    ligar() {
        this.estaLigado = true;
    }
};

console.log(carro);
console.log(carro.velocidade);
carro.acelerar();
carro.ligar();
carro.acelerar();
console.log(carro.velocidade);

// Personagem
let personagem = {
    vida: 200,
    atacar() {
        /// 
    },
    receberGolpe() {
        this.vida--;
    }
};

// Objetos possuem métodos que alteram seus atributos
// Quando queremos acessar um atributo do objeto, de dentro dele, usamos "this"
// "this" -> significa o próprio objeto, ele mesmo