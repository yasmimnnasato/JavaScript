function alterarTexto () {
    let div = document.getElementById('minhaDiv');
    let campo = document.getElementById('campoTexto');
    div.innerHTML = '<p> O texto digitado pelo usuário é: '+campo.value+'</p>';
}

function validarResultado() {
    let resultado = document.getElementById('resultado');

    let resultadoConta = document.getElementById('resultadoConta');
    const RESULTADOVALIDO = 4;
    if (resultadoConta.value == RESULTADOVALIDO) {
        resultado.innerHTML = '<p class="sucesso">Parabéns, você acertou! :D </p>';  }
        else {
            resultado.innerHTML = '<p class="erro">Resposta errada ): <br/> Tente novamente. </p>';
        }
}

function contadorClicks () {
    let numeroZero = document.getElementById('numeroZero');
    let valor = parseInt (numeroZero.innerText) +1;

    numeroZero.innerText = valor;
}