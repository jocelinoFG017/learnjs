/**
 * map -> sempre retorna um array com retorno
 *
 */

const notas = [10, 6.5, 8, 7.5]

// const notasUpdate = notas.map(function (nota) {
//     return nota + 1
// })

const notasUpdate = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1)


console.log(notasUpdate);