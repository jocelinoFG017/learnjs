
/**
 * includes() -> verifica se o elemento existe na lista
 */
const alunas = ['Laura', 'Anny', 'isa']
const size = [23,25,27]

const lista = [alunas, size]

function exibeNomeAndSize(aluno) {
    if (lista[0].includes(aluno)) {
        const i = lista[0].indexOf(aluno)
        const media = lista[1][i]
        console.log(`${aluno}, size ${media}`);
    }else{
        console.log("Não existe na lista");
    }
}
exibeNomeAndSize('isa')