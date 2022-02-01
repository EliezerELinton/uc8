//variaveis, é um espaço na memoria do computador para guardar algum valor
let pesopeca = 100


if (pesopeca >= 100){
    console.log ("Peso maior que 100g, podemos cadastrar a peça")
}
else {
    console.log ("Peso Insuficiente, não é possível cadastrar")
}

let numeroPecas = 8

if(numeroPecas < 10) {
    console.log(" Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log ("Não há espaço disposível na caixa")
}

let nomePeca = "Disco de Freio"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length <3)
{
    console.log("Nome de Peça Muito Curto, não é possível cadastrar")
} else {
    console.log ("Nome de peça adequado, podemos cadastrar")
}