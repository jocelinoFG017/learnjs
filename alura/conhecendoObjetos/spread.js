/**
 *
 */
const estudante = {
  nome: "Lucia",
  sobrenome: "Oliveira",
  idade: 25,
  curso: "JavaScript",
  nota: 9.5,
  bolsista: true,
  telefones: ["123456789", "987654321"],
  enderecos: [
    {
      rua: "Rua das Flores",
      numero: 123,
      complemento: "Apto 45",
    },
    {
      rua: "Avenida Brasil",
      numero: 456,
      complemento: "Casa",
    },
  ],
};
// Spread operator

function exibirTelefones(telefone1, telefone2) {
  console.log(`Telefone 1: ${telefone1}`);
  console.log(`Telefone 2: ${telefone2}`);
}

exibirTelefones(...estudante.telefones);

const dadosEstudante = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0],
};

console.log(dadosEstudante);