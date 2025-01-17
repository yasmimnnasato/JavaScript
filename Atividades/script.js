//Exibir uma mensgame ao carregar a minha pagina
alert('Bem vindo a minha página');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('A pagina executou o metado exibirMensagem');
}

//Atividade 3 - Calculadora



function realizarCalculos() {
    let numero1 = parseInt(prompt('Informe o primeiro valor'));
    let numero2 = parseInt(prompt('Informe o segundo valor'));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}

function somar(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log('O resultado da soma entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);

}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log('O resultado da subtração entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log('O resultado da divisão entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log('O resultado da multiplicação entre ' + valor1 + ' e ' + valor2 + ' é: ' + resultado);
}

//Calculadora "funcional"
var valor1 = '';
var valor2 = '';
var operacao = '';
function guardarNumero(valor) {
    if (!operacao) {
        valor1 += valor;
        console.log(valor1)
    }
    //se a operação foi informada
    if (operacao) {
        valor2 += valor;
        console.log(valor2);
    }

}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {

    valor1 = '';
    valor2 = '';
    operacao = '';
}

function igual() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    if (operacao == '+') {
        resultado = valor1 + valor2;
    }

    if (operacao == '-') {
        resultado = valor1 - valor2;
    }

    if (operacao == '*') {
        resultado = valor1 * valor2;
    }

    if (operacao == '/') {
        resultado = valor1 / valor2;
    }
    alert('Resultado: ' + resultado)
}

//Exercicio 2 Atividade 1

function sono() {
    const horasDormidas = prompt ('Informe qunatas horas vc dormiu');
    if (horasDormidas  >= 8) {
    alert("Dormiu o suficiente");
}

    else  {
    alert("Não dormiu o suficiente");
}
}
