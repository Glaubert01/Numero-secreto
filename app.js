let numeroSecreto = gerarNumeroAletorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
    }
}

function gerarNumeroAletorio(){
    return parseInt(math.random() * 10 + 1);
}