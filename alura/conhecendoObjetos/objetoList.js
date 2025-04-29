const estudante = {
    nome: "Lucia",
    sobrenome: "Oliveira",
    idade: 25,
    curso: "JavaScript",
    nota: 9.5,
    endereco: [{
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    }],
}


// console.log(estudante.endereco);
// console.log(estudante.endereco[0].rua) // Rua das Flores;

estudante.endereco.push({
    rua: "Rua das Palmeiras",
    numero: 456,
    cidade: "",
    estado: "RJ"
})

console.log('----------------------------');
// console.log(estudante.endereco);
// console.log(estudante.endereco[1].rua) // Rua das Palmeiras;

// retorna somente os endereços que possuem cidade
const listaEnderecoCompleto = estudante.endereco.filter((endereco) => endereco.cidade)

console.log(listaEnderecoCompleto);