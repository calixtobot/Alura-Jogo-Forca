let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

function limpaCanvas() {
    pincel.clearRect(0, 0, 800, 400)
}

function desenhaForca () {

    pincel.strokeStyle = '#061f3d'
    pincel.fillStyle = '#061f3d'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.moveTo(250,370)
    pincel.lineTo(550,370)
    pincel.stroke()

    pincel.beginPath()
    pincel.moveTo(300,370)
    pincel.lineTo(300,50)
    pincel.stroke()

    pincel.beginPath()
    pincel.moveTo(300,50)
    pincel.lineTo(450,50)
    pincel.stroke()

    pincel.beginPath()
    pincel.moveTo(450,50)
    pincel.lineTo(450,100)
    pincel.stroke()
}


function desenhaCabeca() {

    pincel.strokeStyle = 'rgb(192, 63, 63)'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.arc(450,125,25,0,2 * 3.14)
    pincel.stroke()
}

function desenhaCorpo() {

    pincel.strokeStyle = 'rgb(192, 63, 63)'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.moveTo(450,150)
    pincel.lineTo(450,250)
    pincel.stroke()
}

function desenhaBracoEsquerdo() {

    pincel.strokeStyle = 'rgb(192, 63, 63)'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.moveTo(450,170)
    pincel.lineTo(420,210)
    pincel.stroke()
}

function desenhaBracoDireito() {

    pincel.strokeStyle = 'rgb(192, 63, 63)'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.moveTo(450,170)
    pincel.lineTo(480,210)
    pincel.stroke()
}

function desenhaPernaEsquerda() {

    pincel.strokeStyle = 'rgb(192, 63, 63)'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.moveTo(450,250)
    pincel.lineTo(420,290)
    pincel.stroke()
}

function desenhaPernaDireita() {

    pincel.strokeStyle = 'rgb(192, 63, 63)'

    pincel.lineWidth = 6

    pincel.beginPath()
    pincel.moveTo(450,250)
    pincel.lineTo(480,290)
    pincel.stroke()
}

function textoCanva (texto,cor) {

    pincel.fillStyle = cor
    pincel.font = '30px Inter'
    pincel.fillText(texto,0,70)
}