// DOM
// const x=13 constante, não muda
// let x=14 mutável

const lampada = document.querySelector('#lampada')
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

// EVENTOS

    bt01.addEventListener('click', ativar)
bt02.addEventListener('click', desativar)
lampada.addEventListener('dblclick', quebrar)





// Função


function ativar() {
    lampada.src = "images/acesa.gif"

}
function desativar() {
    lampada.src = "images/apagada (1).gif"

}
function quebrar() {
    lampada.src = "images/quebrada (1).jpg"

}