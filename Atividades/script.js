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
    const horasDormidas = prompt('Informe qunatas horas vc dormiu');
    if (horasDormidas >= 8) {
        alert("Dormiu o suficiente");
    }

    else {
        alert("Não dormiu o suficiente");
    }
}

function calcularValorTotal() {
    const valorProduto = parseFloat(prompt('Informe o valor total dos produtos'));
    //calcular o valor da forma de pagamento
    let total = valorProduto + calcularFormaPgto(valorProduto);
    console.log('Total com forma de pagamento:' + total)
    //calcula o valor do desconto (se houver)
    total -= calcularDesconto(valorProduto);
    console.log('total com forma de pagamento:' + total);
    //calculat o valot do frete
    total += calcularFrete();
    alert('Total da compra:R$'+total);
}


function calcularFormaPgto(vlProduto) {
    const formaPgto = parseInt(prompt('Informe a forma de pagamento \n 1- Cartão de Debito \n2 Pix \n3 Cartão de Crédito \n4 Boleto'));
    const CARTAODEB = 1, PIX = 2, CARTAOCRED = 3, BOLETO = 4;

    switch (formaPgto) {
        case CARTAODEB:
            return - (vlProduto * 0.05); //5%
        case PIX:
            return - (vlProduto * 0.1); //10%
        case CARTAOCRED:
            return vlProduto * 0.02;  //2%
        case BOLETO:
            return 0;
    }
}

function calcularDesconto(vlProduto) {
    const cupom = prompt('Você possui algum cupom? Se sim, digite-o');
    let valorCupom = cupom.substring(0, 2);
    if (verificarCupomValido(valorCupom)) {
        //aplicar desconto
        return vlProduto * (valorCupom / 100);
    }
    return 0;
}

function verificarCupomValido(valorCupom) {
    return !isNaN(valorCupom)
}

function calcularFrete() {
    const tipoFrete = parseInt (prompt('Escolha o tipo de frete \n 1- Frete Padrão \n 2- Frete Expresso'));
    const FRETEPADRAO = 1, FRETEEXPRESSO = 2;
    switch (tipoFrete) {
        case FRETEPADRAO:
            return 10;
        case FRETEEXPRESSO:
            return 20;
    }
    return 0;
}


function testeFor() {
    for (let contador = 0; contador < 10; contador ++) {
        console.log(contador);
    }
}

function testeWhile() {
    let numero = 0;
    while (!isNaN(numero)) {
        numero = prompt('Informe apenas números.');
    }
    alert('Você não digitou um número.\nAplicação encerrada')
}

function atFor() {
    for (let contador = 0; contador < 11; contador ++); {
        console.log(contador);
    }
}

function atWhile() {
    let contador = 0;
    while (contador < 10) {
        console.log(contador);
        contador +=1;
    }
}

function decrescenteFor() {
    for (let contador = 10; contador > 0; contador --) {
        console.log(contador);
    }
}

function decrescenteWhile() {
    let contador = 10;
    while (contador > 0) {

   
        console.log(contador);
        contador -=1; 
    }
}