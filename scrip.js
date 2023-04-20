let array
console.log('a. ', array)

array = null
console.log('b.', array)

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c.',array.length) // 11

let i = 0
console.log('i.', array[9]) //12

array[i+1] = 19
console.log('e.', array)

const valor = array[i+6]
console.log('f.', valor)

const frase = prompt('digite uma frase')
console.log(frase.toUpperCase().replaceAll('A','I'), frase.length)


//1. faça um programa que pergunte ao usuario seu nome e seu email
// e imprima no console a seguinte mensagem

//o email '' foi cadastrado com sucesso. seja bem-vindo 'nome usuario'

//nomeUsuario = prompt('Por favor, digite seu nome')
//email = prompt('digite seu email')
//console.log(`O email ${email} foi cadastrado com sucesso. 
//Seja bem-vinda(o) ${nomeUsuario} !`)

//2. faça um programa seguimdo os passos:
//a. crie um array vazio e guarde em uma var chamada 'listaDetarefas'
//b. pergunte ao usuario 3 tarefas que ele precise realizar no dia e guarde, uma por uma, no array
//c. imprime array no console
//d. peça ao usuario que digite o **indice** de uma tarefa que ele ja realizou: 0,1 ou 2
//e. remova da lista o item de indice que o usuario escolheu
//f. imprima o array no console

//let listaDetarefas = []
//tarefa1 = prompt('digite uma tarefa')
//tarefa2 = prompt('digite uma tarefa2')
//tarefa3 = prompt('digite uma tarefa3')
//console.log(listaDetarefas)
//listaDetarefas = [tarefa1, tarefa2, tarefa3]
//let indice = prompt('escolha um indice de 0 a 2')
//listaDetarefas.splice(indice, 1)
//alert(listaDetarefas)

//receba uma frase e retorne um array cada
//elemento é uma das palavras da frase, ignorando os espaços

//let pergunta = prompt('digite uma frase')
//pergunta.trim;
//let questao = pergunta.split('')
//alert(questao + '\n' + questao.length)

//outro
//let arrayFrutas = ['banana', 'morango', 'abacaxi', 'laranja', 'ameixa']
//let indice = arrayfrutas.indexOf('abacaxi');
//console.log(indice, arrayfrutas.lengh)

//outro
//let comida = ['pizza', 'queijo. banana, x, bombom']
//alert(comida [0] + '\n'
//+ comida [1] + '\n'
//+ comida [2] + '\n'
//+ comida [3] + '\n'
//+ comida [4] + '\n')

//comida = prompt('infome, sua comida favorita')
//console.lo(comidas)

//4
let num1 = prompt('digite um numero')
let num2 = prompt('digite um numero 2')
let num3 = prompt('digite um numero3')
usuario = [num1, num2, num3]
alert(usuario + '\n' + usuario.reverse())