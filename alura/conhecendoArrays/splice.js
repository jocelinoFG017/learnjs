/*
splice() -> atualizar e alterar lista/array

splice(inicio, quantidade, item1, item2, etc...)

início → índice onde começa a alteração.

quantidade → quantos elementos você quer remover a partir do índice.

item1, item2, ..., itemN → (opcional) novos itens para adicionar no lugar.
*/

const alunas = [
    "Ana", "Beatriz", "Camila", "Daniela", "Eduarda", "Fernanda", "Gabriela"
];

alunas.splice(1,2,'Laura')

console.log(alunas);
