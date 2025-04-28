// parametros/ argumentos
// retorno

function exibeNome(nome){
 console.log(nome);
}

exibeNome('ana');

// arrow functions

const estudanteResultado = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas >4){
        return true
    }else {
        return false
    }
}

console.log(estudanteResultado(6, 5));