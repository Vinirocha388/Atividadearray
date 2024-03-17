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
let delNumbers = numbers.pop(); // Remove o último elemento do array e o armazena
console.log(delNumbers); // Saída: 4 - Exibe o elemento removido
//Exemplo 2
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // Remove 'orange' e a armazena em lastFruit
console.log(lastFruit); // Saída: 'orange'


//shift: Remove o primeiro elemento de um array e retorna esse elemento, 
//atualizando os índices dos outros elementos.
//Exemplo 1
let numbers = [1, 2, 3, 4];
let firstNumbers = numbers.shift();
console.log(firstNumbers); // Saída: 1
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
numbers.sort((a, b) => a - b); // Ordena o array em ordem crescente usando o método sort, 
//com uma função de comparação que subtrai b de a
console.log(numbers); // Imprime o array ordenado
//Exemplo 2
let fruits = ["Banana", "Orange", "Apple", "Mango"]; // Declaração de um array de palavras
fruits.sort((a, b) => a.comparar(b)); // Ordena o array em ordem alfabética usando o método sort,
// com uma função de comparação que utiliza comparar
console.log(fruits); // Imprime o array ordenado


//join: Une todos os elementos de um array em uma string
//Exemplo 1
let fruits = ['apple', 'banana', 'orange']; // Declara um array de frutas
let joinString = fruits.join(', '); // Junta os elementos do array usando vírgula e espaço como separadores
console.log(joinString); // Saída: 'apple, banana, orange' - Exibe a string resultante
//Exemplo 2
let numbers = [1, 2, 3, 4, 5]; // Declara um array de números
let joinString = numbers.join('-'); // Junta os elementos do array usando hífen como separador
console.log(joinString); // Saída: '1-2-3-4-5' - Exibe a string resultante


//reverse:Inverte a ordem dos elementos de um array in-place e retorna o array invertido
//Exemplo 1
let numbers = [1, 2, 3, 4, 5]; // Declara um array de números
numbers.reverse(); // Inverte a ordem dos elementos no array
console.log(numbers); // Saída: [5, 4, 3, 2, 1] - Exibe o array invertido
//Exemplo 2
let fruits = ['apple', 'banana', 'orange']; // Declara um array de frutas
fruits.reverse(); // Inverte a ordem dos elementos no array
console.log(fruits); // Saída: ['orange', 'banana', 'apple'] 


//every:Testa se todos os elementos do array passam no teste implementado pela função fornecida.
//Exemplo 1
let numeros = [1, 2, 3, 4, 5]; // Declara um array de números
let todosMaioresQueZero = numeros.every((numero) => numero > 0); // Verifica se todos os números são maiores que zero
console.log(todosMaioresQueZero); // Saída: true - Exibe se todos os números são maiores que zero
//Exemplo 2
let idades = [30, 25, 40, 35]; // Declara um array de idades
let todasAcimaDeVinte = idades.every((idade) => idade > 20); // Verifica se todas as idades são maiores que 20
console.log(todasAcimaDeVinte); // Saída: true - Exibe se todas as idades são maiores que 20



//SPLICE
//ADICIONAR
let numbers = [1, 2, 3, 4, 5];
// Adiciona os elementos 6 e 7 a partir do índice 3 (posição 4) sem remover nenhum elemento
numbers.splice(3, 0, 6, 7);
console.log(numbers); // Saída: [1, 2, 3, 6, 7, 4, 5]

//REMOVER
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// Remove 2 elementos a partir do índice 2 (posição 3)
fruits.splice(2, 2);
console.log(fruits); // Saída: ['apple', 'banana', 'kiwi']

//SUBSTITUIR
let colors = ['red', 'green', 'blue', 'yellow'];
// Substitui 2 elementos a partir do índice 1 (posição 2) pelos elementos 'orange' e 'purple'
colors.splice(1, 2, 'orange', 'purple');
console.log(colors); // Saída: ['red', 'orange', 'purple', 'yellow']