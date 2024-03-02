
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")
const btn4 = document.querySelector("#btn-4")
const btn5 = document.querySelector("#btn-5")
const btn6 = document.querySelector("#btn-6")

const caja = document.querySelector("#caja")

btn1.addEventListener("click", () => {
    caja.style.backgroundColor = "#e53e3e";
    console.log("click")

})
btn2.addEventListener("click", () => {
    caja.style.backgroundColor = "#dd6b20";
    console.log("click")

})
btn3.addEventListener("click", () => {
    caja.style.backgroundColor = "#faf089";
    console.log("click")

})
btn4.addEventListener("click", () => {
    caja.style.backgroundColor = "#48bb78";
    console.log("click")

})
btn5.addEventListener("click", () => {
    caja.style.backgroundColor = "#81e6d9";
    console.log("click")

})
btn6.addEventListener("click", () => {
    caja.style.backgroundColor = "#d53f8c";
    console.log("click")

})