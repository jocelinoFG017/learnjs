const alunas = ["Laura", "Anny", "isa"];
const size = [23, 25, 27];

const lista = [alunas, size]

function exibeNomeAndSize(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunas, size] = lista;
    const i = alunas.indexOf(aluno);
    const media = size[i];
    console.log(`${aluno}, size ${media}`);
  } else {
    console.log("Não existe na lista");
  }
}
exibeNomeAndSize("isa");
