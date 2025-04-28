const sala1 = [1.4, 6, 8, 9]
const sala2 = [3.4, 5, 3.8, 2]
const sala3 = [7.4, 9.4, 7.8, 3]


function calculaMedia(listaDeNotas){
    // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota
    // }, 0)
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0)

    const media = somaDasNotas / listaDeNotas.length

    return media
}

console.log(calculaMedia(sala1));