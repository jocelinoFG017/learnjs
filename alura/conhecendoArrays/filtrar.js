const alunos = ['ana', 'maria', 'evelyn', 'Leticia']
const medias = [7, 4.5,8, 7.5]

const reprovados = alunos.filter( (aluno, indice) => {
    return medias[indice] < 7
})

console.log(reprovados);