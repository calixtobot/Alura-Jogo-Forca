//funções de navegação------------------------------

function telaInicial(){
    document.getElementById('main-index').style.display = ''
    document.getElementById('main-addpalavras').style.display = 'none'
    document.getElementById('main-game').style.display = 'none'
}

function iniciaJogo () {
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('main-addpalavras').style.display = 'none'
    document.getElementById('main-game').style.display = ''
    document.getElementById('teclado').style.display = 'none'
    sorteiaPalavra()
    desenhaForca()
    teclas()
}

function telaPalavra () {
    document.getElementById('main-index').style.display = 'none'
    document.getElementById('main-game').style.display = 'none'
    document.getElementById('main-addpalavras').style.display = ''
}

//funções referentes à adição de palavras

function limpaInput() {
    document.getElementById('inputPalavras').value =''
}

function adicionaPalavras () {
    let inputPalavras = document.getElementById('inputPalavras')
    bancoPalavras.push(inputPalavras.value.toUpperCase())
    console.log(bancoPalavras)
    limpaInput()
}

function adicionaeSalva () {
    let inputPalavras = document.getElementById('inputPalavras')
    bancoPalavras.push(inputPalavras.value.toUpperCase())
    console.log(bancoPalavras)
    iniciaJogo()
}

function recarregaPagina () {
    document.location.reload(true)
}

function novoJogo () {
    letrasCorretas.innerText = ''
    letrasIncorretas.innerText = ''
    letrasAdv = []
    letrasErradas = []
    tentativas = 0
    limpaCanvas()
    sorteiaPalavra()
    desenhaForca()
}

//botões do jogo-------------------------------

//botões index

let botaoIniciarJogo = document.getElementById('iniciarJogo')
botaoIniciarJogo.onclick = iniciaJogo

let menuAdicionar = document.getElementById('adicionarPalavra')
menuAdicionar.onclick = telaPalavra

//botões da tela adicionar palavras

let botaoadicionaoutro = document.getElementById('but-adicionarout')
botaoadicionaoutro.onclick = adicionaPalavras

let botaoadicionasalva = document.getElementById('but-salvar')
botaoadicionasalva.onclick = adicionaeSalva

let botaoCancelar = document.getElementById('but-cancelar')
botaoCancelar.onclick = telaInicial

//botões game ---------------------------------------

let botaoNovojogo = document.getElementById('gameNovojogo')
botaoNovojogo.onclick = novoJogo

let botaoTeclado = document.getElementById('tecladoVirtual')
botaoTeclado.onclick = manipulaTeclado

let botaoDesistir = document.getElementById('gameDesistir')
botaoDesistir.onclick = recarregaPagina

//lógica do jogo ------------------------------------

function sorteiaPalavra() {
    let sorteia = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)]
    palavraEscolhida = sorteia
    
}  //função adicionada à função de início do jogo

function teclas () {
    const alfabeto = ['A', 'B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V','W', 'X', 'Y', 'Z']
    teclado.innerHTML = ''
    alfabeto.forEach(letra => {
        teclado.innerHTML += `<button id='tecla${letra}' class='tecla'>${letra}</button>`
    })

    mapeiaTeclas()
        
}

function mapeiaTeclas () {
    let x = document.getElementsByClassName('tecla')

    for(let i = 0; i < x.length; i++) {
        let ev = x[i].id
        let texto = x[i].innerText
        atribuirEvento(ev, texto)
    }
}

function atribuirEvento (id,texto) {
    document.getElementById(id).addEventListener("click", function () {
        logicaDoJogo(texto)
    })
}

document.addEventListener('keypress', (evento) => {
    let digitado = evento.key.toUpperCase()
    logicaDoJogo(digitado)
})

function logicaDoJogo(evento) {
    
        let letraDigitada = evento
        // .key.toUpperCase()
        console.log(letraDigitada)
    
        if(letrasErradas.includes(letraDigitada)) {
            alert('Letra já digitada!')
            tentativas++
        } else {
            if(palavraEscolhida.includes(letraDigitada)) {
                letrasAdv.push(letraDigitada)
            } else {
                letrasErradas.push(letraDigitada)
                tentativas++
            }
        }
    
        switch (tentativas) {
            case 1:
                desenhaCabeca()
                break
            case 2:
                desenhaCorpo()
                break
            case 3:
                desenhaBracoEsquerdo()
                break
            case 4:
                desenhaBracoDireito()
                break
            case 5:
                desenhaPernaDireita()
                break
            case 6:
                desenhaPernaEsquerda()
                break
        }
    
        atualizaJogo()
}

function atualizaJogo() {
    mostrarLetrasErradas()
    mostrarLetrasCertas()
    verificaSeGanhou()
}

function mostrarLetrasErradas () {
    letrasIncorretas.innerText = ''
    letrasErradas.forEach(letra => {
        letrasIncorretas.innerText += letra
    })
}

function mostrarLetrasCertas () {
    letrasCorretas.innerText = ''
    palavraEscolhida.split('').forEach(letra => {
        if(letrasAdv.includes(letra)) {
            letrasCorretas.innerText += letra
        } else {
            letrasCorretas.innerText += '_'
        }
    })
}

function verificaSeGanhou() {
    if (palavraEscolhida === letrasCorretas.innerText) {
        textoCanva('VOCÊ GANHOU!', 'GREEN')
    }

    if (tentativas == 6){
        textoCanva('VOCÊ PERDEU!', 'RED')
        letrasCorretas.innerText = palavraEscolhida
    }
}

function manipulaTeclado() {
    if (tec == 1) {
        AtivaTecladoVirtual()
        tec = 0
    } else if (tec == 0) {
        desativaTecladoVirtual()
        tec = 1
    }
}

function AtivaTecladoVirtual () {
    document.getElementById('teclado').style.display = ''
}

function desativaTecladoVirtual (){
    document.getElementById('teclado').style.display = 'none'
}

telaInicial()

let bancoPalavras = ['TEXTO','MELANCIA','ANDROID','FONE','CASA','TELEFONE','GATO','CACHORRO','BOLA','CARRO']
let palavraEscolhida = ''
let letrasAdv = []
let letrasErradas = []
let tentativas = 0
let tec = 1