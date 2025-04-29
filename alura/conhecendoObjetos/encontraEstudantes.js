/**
 * 
 * @param {*} lista 
 * @param {*} chave 
 * @param {*} valor 
 * @returns 
 *  A função `buscaInfo` recebe uma lista de estudantes, uma chave e um valor.
 * Ela utiliza o método `find` para procurar um estudante na lista
 * que tenha a chave especificada com o valor fornecido.
 * Se encontrado, retorna o estudante; caso contrário, retorna `undefined`.
 */

const estudantes = require('./estudantes.json');


function buscaInfo(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInfo(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);



const telefoneEstudante = buscaInfo(estudantes, 'telefone', '19918820860');
console.log(telefoneEstudante);
