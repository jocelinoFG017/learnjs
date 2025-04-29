const estudantes = require("./estudantes.json");

function ordernar(lista, prop) {
  return lista.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
}

const listaOrdenada = ordernar(estudantes, "nome");
console.log(listaOrdenada);
