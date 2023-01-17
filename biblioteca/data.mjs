export function imprimirHoje(nome) {
    let fruta = 'banana';
    if (nome == 'Diego') {
        fruta = 'abacaxi';
    }
    console.log('Olá ' + nome + ' gosta de ' + fruta);
    console.log('Hoje é dia ' + new Date());
}
