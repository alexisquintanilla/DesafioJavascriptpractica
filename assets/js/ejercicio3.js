

let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")

const btnSumar = document.querySelector("#btn-sumar")
const btnResta = document.querySelector("#btn-restar")

let resultado = document.querySelector(".resultado")

btnSumar.addEventListener('click', () => {
    let resultadoSumar = +valor1.value + +valor2.value
    resultado.innerHTML = resultadoSumar

})

btnResta.addEventListener('click', () => {
    let resultadoResta = +valor1.value - +valor2.value

    if (resultadoResta < 0) {
        resultado.innerHTML = 0
    } else {
        resultado.innerHTML = resultadoResta

    }

})
