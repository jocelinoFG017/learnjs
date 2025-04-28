/**
 * Removar duplicatas de um array
 */

const nomes = [
    "Ana", "Maria", "Clara", "Ana", "Beatriz", 
    "Sofia", "Maria", "Julia", "Clara", "Beatriz"
];

// const nomesUpdate = new Set(nomes);
// O Set não aceita valores duplicados

const nomesSemDuplicatas = [...new Set(nomes)];  
// O operador spread (...) transforma o Set em um array


// console.log(nomesUpdate);
console.log(nomesSemDuplicatas);