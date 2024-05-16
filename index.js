var setaEsquerda = window.document.getElementById("seta-esquerda");
var setaDireita = window.document.getElementById("seta-direita")
var imagemSala = window.document.getElementById("imagem-sala")
var imagemCasa = window.document.getElementById("imagem-casa")

function RolarParaDireita() {
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex;"
    imagemSala.style = "display:none"
    imagemCasa.style = "display:flex; "

}

function RolarParaEsquerda() {
    setaDireita.style = "display:flex;"
    setaEsquerda.style = "display:none"
    imagemSala.style = "display:flex"
    imagemCasa.style = "display:none"

}