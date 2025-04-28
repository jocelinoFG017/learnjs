/*
slice() -> utilizado na divisão de elementos do array
*/

const nomesMulheres = [
    "Ana", "Beatriz", "Camila", "Daniela", "Eduarda", "Fernanda", "Gabriela",
    "Isabela", "Juliana", "Karina", "Larissa", "Marina", "Natália", "Olívia",
    "Patrícia", "Renata", "Sabrina", "Tatiane", "Viviane", "Helena"
];

const segunda = nomesMulheres.slice(0, nomesMulheres.length/2)
const terca = nomesMulheres.slice(nomesMulheres.length/2)

console.log(segunda);
console.log(terca);