
const inputNombre = document.querySelector("#nombre")
const inputAsunto = document.querySelector("#asunto")
const inputMensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#formulario")

// const errores
let errorNombre = document.querySelector(".errorNombre")
let errorAsunto = document.querySelector(".errorAsunto")
let errorMensaje = document.querySelector(".errorMensaje")
let resultado = document.querySelector(".resultado")



const regexNombre = /^[a-zA-Z]+$/;
const regexAsunto = /^[a-zA-Z]+$/;
const regexMensaje = /^[a-zA-Z]+$/;

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = inputNombre.value
    const asunto = inputAsunto.value
    const mensaje = inputMensaje.value

    resultado.innerHTML = ""
    errorNombre.innerHTML = ""
    errorAsunto.innerHTML = ""
    errorMensaje.innerHTML = ""

    if (!regexNombre.test(nombre)) {
        errorNombre.innerHTML = "El nombre es requerido"
        resultado.innerHTML = ""


    }
    if (!regexAsunto.test(asunto)) {
        errorAsunto.innerHTML = "El asunto es requerido"

    }
    if (!regexMensaje.test(mensaje)) {
        errorMensaje.innerHTML = "El mensaje es requerido"

    }

    if (!regexMensaje.test(mensaje) === false && !regexAsunto.test(asunto) === false && !regexNombre.test(nombre) === false) {
        resultado.innerHTML = "Mensaje enviado con éxito!!!"

    }

})



