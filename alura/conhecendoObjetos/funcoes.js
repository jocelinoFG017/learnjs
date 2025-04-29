const estudante = {
    nome: "Lucia",
    sobrenome: "Oliveira",
    idade: 25,
    curso: "JavaScript",
    nota: 9.5,
    telefones: ['(11) 98765-4321', '(11) 91234-5678'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? "Aprovado" : "Reprovado";
    } // não é possivel usar arrow function aqui, pois o this não vai funcionar,
    // pois o this não vai referenciar o objeto estudante
}

console.log(estudante.estaAprovado(7)); // Aprovado