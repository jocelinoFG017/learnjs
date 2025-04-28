/**
 * forEach -> é um metodo callback de chamada de função, ele 
 * não retorna nada, nem numero, nem string nem nada. o tipo de
 * retorno é do tipo undefined
 * Função callback -> O que chamamos de “função callback”,
 * É quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.
 */

const notas = [5.5, 6.2, 14, 19.5];

let somaDasNotas = 0


notas.forEach(function (nota){
    somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(`${media}`);