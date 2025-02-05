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
    alert('Total da compra:R$' + total);
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
    const tipoFrete = parseInt(prompt('Escolha o tipo de frete \n 1- Frete Padrão \n 2- Frete Expresso'));
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
    for (let contador = 0; contador < 10; contador++) {
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
    for (let contador = 0; contador < 11; contador++); {
        console.log(contador);
    }
}

function atWhile() {
    console.log('Números pares usando o for:');
    let contador = 0;
    while (contador < 10) {
        console.log(contador);
        contador += 1;
    }
}

function decrescenteFor() {
    console.log('Números decrecente usando o for:');
    for (let contador = 10; contador > 0; contador--) {
        console.log(contador);
    }
}

function decrescenteWhile() {
    console.log('Números decrescente usando o while:');
    let contador = 10;
    while (contador > 0) {


        console.log(contador);
        contador -= 1;
    }
}

function numerosParesFor() {
    console.log('Números pares usando o for:');
    for (let contador = 0; contador <= 10; contador += 2) {
        console.log(contador);
    }
}

function numerosParesWhile() {
    console.log('Números pares usando o while:');
    let contador = 0;
    while (contador <= 10) {

        console.log(contador);
        contador += 2
    }
}

function numerosImparesFor() {
    console.log('Números impares usando o for:');
    for (let contador = 1; contador <= 10; contador += 2) {
        console.log(contador);
    }
}

function numerosImparesWhile() {
    console.log('Números impares usando o while:');
    let contador = 1;
    while (contador <= 10) {

        console.log(contador);
        contador += 2
    }
}

function whileBreakEContinue() {
    let numero = 0;
    while (numero != 7) {
        numero = prompt('Informe um número');
        if (numero == 5) {
            console.log('Achou um easter egg e pode sair do loop');
            break;
        } else if (numero == 3) {
            console.log('Não imprime o número');
            continue;
        }
        console.log(numero);
    }
}

function notaZeroEDez() {
    let numero = -1;
    while (numero > 10 || numero < 0) {
        numero = prompt('De uma nota de 0 a 10');

        {
            if (numero > 10 || numero < 0) console.log('Nota inválida');
        }
        console.log(numero)
    }
    alert('Sua nota foi aceita.')
}

function usuarioSenha() {
    const usuario = 'yasmimcomM';
    const senha = 'mimi';
    let nomeDigitado = '';
    let senhaDigitada = '';

    while (nomeDigitado != usuario || senhaDigitada != senha) {
        nomeDigitado = prompt('Escreva seu usuario')
        senhaDigitada = prompt('Escreva sua senha')

        if (nomeDigitado != usuario || senhaDigitada != senha)
            console.log('Senha ou usuario invalido')

        console.log(nomeDigitado, senhaDigitada)
    }
    alert('Usuario e senha validos.')
}

function palavras() {
    const sair = 'sair';
    let qualquerPalavra = '';

    while (qualquerPalavra != sair) {
        qualquerPalavra = prompt('Adivinhe a palavra');

        if (qualquerPalavra.length < 3) {
            console.log(qualquerPalavra, "Palavra inavlida pois tem menos de 3 letras");
            continue;
        }
        else if (qualquerPalavra == sair) {
            console.log('Saiu do loop, acertou a palavra');
            break;
        }
    }


}

function umDez() {
    let array = [];
    for (let contador = 0; contador < 10; contador++) {
        array.push(prompt('Informe um número'));

    }
    console.log(array);
}

function realizarLoginUsuarios() {
    const usuarios = ['yasmimcomM', 'adenilson123', 'alice321'];
    const senhas = ['mimi', 'dd', '1234'];
    let usuarioLogin = prompt('Informe seu usuário de login');
    let senhaLogin = prompt('Informe sua senha');
    let fezLogin = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == usuarioLogin && senhas[i] == senhaLogin) {
            fezLogin = true;
            alert('Login realizado');
            break;
        }
    }
    if (!fezLogin) {
        alert('Usuario ou senha inválidos.')
    }
}

function contadorLetras () {
    const palavras = ['gato', 'cachorro', 'elefante'];
    palavras.forEach(letras => console.log (' A palavra '+letras+' tem '+letras.length+' letras '));
}


