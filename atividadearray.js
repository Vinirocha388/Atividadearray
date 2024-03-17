//Métodos Array 

//Push:Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
//Exemplo 1
let numbers = [1, 2, 3]; // Cria um array com elementos
numbers.push(4); // Adiciona o elemento 4 ao final do array
console.log(numbers); // Saída: [1, 2, 3, 4] - Exibe o array atualizado
//Exemplo 2
let fruits = ['apple', 'banana'];
fruits.push('orange'); // Adiciona 'orange' ao final do array
console.log(fruits); // Saída: ['apple', 'banana', 'orange']


//POP:Remove o último elemento de um array e retorna esse elemento.
//Exemplo 1
let numbers = [1, 2, 3, 4]; // Cria um array com elementos
let delNumber = numbers.pop(); // Remove o último elemento do array e o armazena
console.log(delNumber); // Saída: 4 - Exibe o elemento removido
//Exemplo 2
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // Remove 'orange' e a armazena em lastFruit
console.log(lastFruit); // Saída: 'orange'


//shift: Remove o primeiro elemento de um array e retorna esse elemento, 
//atualizando os índices dos outros elementos.
//Exemplo 1
let numbers = [1, 2, 3, 4];
let firstNumber = numbers.shift();
console.log(firstNumber); // Saída: 1
//Exemplo 2
let fruits = ['apple', 'banana', 'orange'];
let primFruit = fruits.shift(); // Remove 'apple' e a armazena em firstFruit
console.log(primFruit); // Saída: 'apple'


//unshift: Adiciona um ou mais elementos no início de um array
// e retorna o novo comprimento do array.
//Exemplo 1
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // Saída: [1, 2, 3, 4]
//Exemplo 2
let fruits = ['banana', 'orange'];
fruits.unshift('apple'); // Adiciona 'apple' ao início do array
console.log(fruits); // Saída: ['apple', 'banana', 'orange']


//concat:Retorna um novo array composto pelos arrays ou valores passados como argumento.
//Exemplo 1
let array1 = [1, 2];
let array2 = [3, 4];
let concatArray = array1.concat(array2);
console.log(concatArray); // Saída: [1, 2, 3, 4]
//Exemplo 2
let p1 = "Olá"; // declaro itens
let p2 = "mundo!"; 
let p3 = " Como você está?";
let concatenatedString = p1.concat(", ", p2, p3); // dou o comando para concat
console.log(concatpala); // Saída: "Olá, mundo! Como você está?"


//includes: Determina se um array contém um determinado elemento 
//e retorna true ou false conforme apropriado.
//Exemplo 1
let numbers = [1, 2, 3, 4, 5]; // Cria um array de números
let tresincluido= numbers.includes(3); // Verifica se o número 3 está presente no array
console.log(tresincluido); // Saída: true - Exibe se o número 3 está presente no array
//Exemplo 2
let fruits = ['apple', 'banana', 'orange']; // Cria um array de frutas
let bananaincluida = fruits.includes('banana'); // Verifica se 'banana' está presente no array
console.log(banaincluida); // Saída: true - Exibe se 'banana' está presente no array


//sort: Classifica os elementos de um array localmente e retorna o array.
//Exemplo 1
let numbers = [5, 2, 9, 1, 8]; // Declaração de um array de números
numbers.sort((a, b) => a - b); // Ordena o array em ordem crescente usando o método sort(), com uma função de comparação que subtrai b de a
console.log(numbers); // Imprime o array ordenado
//Exemplo 2
let fruits = ["Banana", "Orange", "Apple", "Mango"]; // Declaração de um array de palavras
fruits.sort((a, b) => a.comparar(b)); // Ordena o array em ordem alfabética usando o método sort,
// com uma função de comparação que utiliza localeCompare()
console.log(fruits); // Imprime o array ordenado