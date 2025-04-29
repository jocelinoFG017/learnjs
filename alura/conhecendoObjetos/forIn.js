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
    }
  ],
};


// for in
for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== "object" && tipo !== "function") {
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
//   console.log(estudante[chave]);
}



