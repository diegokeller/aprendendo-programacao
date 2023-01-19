/*
Imagine que está desenvolvendo um sistema bancário. 
Existe a conta bancária que tem um saldo. 
E podemos fazer depósitos e saques. 
Como isso afeta o saldo?

Sistema para o controle remoto de uma TV. Podemos mudar de canal e controlar o volume.

Um retângulo tem duas medidas. 
Correspondentes aos dois lados. 
E podemos calcular sua área multiplicando um pelo outro. 
Como podemos pensar nisso como um objeto.

Sistema de carrinho de compras. 
Nosso carrinho é composto por uma lista de produtos. 
Podemos adicionar ou remover produtos de nosso carrinho. 
O total do carrinho de compras é a soma dos preços dos produtos nele contidos.
*/

let produto1 = {
    nome: 'Leite',
    valor: 1.23
}

let produto2 = {
    nome: 'Macarrão',
    valor: 3.45
}

let carrinho = {
    produtos: [produto1, produto2],
    adicionar(produto) {
        this.produtos.push(produto);
    },
    remover(produto) {

    },
    totalizar() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total = total + this.produtos[i].valor;
        }
        return total;
    }
};

let conta = {
    saldo: 0,
    sacar(valor) {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
        } else {
            console.log('Saldo insuficente');
        }        
    },
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
};