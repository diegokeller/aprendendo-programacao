/*

Funções

function nome() {

}

*/

// () -> Parâmetros

function ehMultiploDe(numero, divisor) {
    return numero % divisor === 0;
}

export function ehPar(numero) {
    if (ehMultiploDe(numero, 2)) {
        return true;
    } else {
        return false;
    }
}