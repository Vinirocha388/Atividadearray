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