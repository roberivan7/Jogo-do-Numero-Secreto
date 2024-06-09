let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1'); - Uma Alternativa
//titulo.innerHTML = 'Jogo do Numero Secreto';

//let paragrafo = document.querySelector('p'); - Uma Alternativa
//paragrafo.innerHTML = 'Escolha um numero de 1 e 10'

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famale', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas} !`;
        exibirTextoNaTela('p', mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero Secreto é menor !');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior !');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quatidadeDeElementoNaLista = listaDeNumerosSorteados.length;

     if (quatidadeDeElementoNaLista == 3) {
        listaDeNumerosSorteados = []
     }

     if (listaDeNumerosSorteados == numeroEscolhido) {
        listaDeNumerosSorteados = [];
     }
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
     }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

