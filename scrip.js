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

nomeUsuario = prompt('Por favor, digite seu nome')
email = prompt('digite seu email')
console.log(`O email ${email} foi cadastrado com sucesso. 
Seja bem-vinda(o) ${nomeUsuario} !`)

//2. faça um programa seguimdo os passos:
//a. crie um array vazio e guarde em uma var chamada 'listaDetarefas'
//b. pergunte ao usuario 3 tarefas que ele precise realizar no dia e guarde, uma por uma, no array
//c. imprime array no console
//d. peça ao usuario que digite o **indice** de uma tarefa que ele ja realizou: 0,1 ou 2
//e. remova da lista o item de indice que o usuario escolheu
//f. imprima o array no console

let lista = []
tarefa1 = prompt('digite uma tarefa')
tarefa2 = prompt('digite uma tarefa2')
tarefa3 = prompt('digite uma tarefa3')
listaDetarefas = lista[tarefa1 + tarefa2 + tarefa3]
indice = prompt('escolha um indice de uma tarefa que vc ja realizou')
console.log(lista.splice(tarefa1, tarefa2))
