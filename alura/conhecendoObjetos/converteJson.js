const estudante = require('./estudante.json');

// Converte o objeto estudante em uma string JSON
// e armazena na variável stringEstudante
// O método JSON.stringify() converte um objeto JavaScript em uma string JSON
const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);

const objetoEstudante = JSON.parse(stringEstudante);
// O método JSON.parse() converte uma string JSON em um objeto JavaScript
console.log(objetoEstudante);
// O método JSON.parse() também pode ser usado para converter uma string JSON em um objeto JavaScript
// e armazenar na variável objetoEstudante