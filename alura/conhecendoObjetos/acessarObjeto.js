const estudante = {
    nome: "Lucia",
    sobrenome: "Oliveira",
    idade: 25,
    curso: "JavaScript",
    nota: 9.5,
}

// console.log(estudante.nome); 

function exibirInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
// console.log(estudante['nome']);
console.log(exibirInfoEstudante(estudante, 'nome'));
console.log(exibirInfoEstudante(estudante, 'sobrenome'));
console.log(exibirInfoEstudante(estudante, 'idade'));
