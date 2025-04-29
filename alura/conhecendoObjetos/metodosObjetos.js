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
      }
    ],
  };
  
  const chavesObjeto = Object.keys(estudante);
  console.log(chavesObjeto);

  if(!chavesObjeto.includes("endereco")) {
    console.log("Não existe a chave endereco");
  }

  