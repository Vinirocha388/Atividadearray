//Contagem de vogais
let palavra = "Vinicius Rocha";
let palavra1 = palavra.split("");
let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let quanvogais = palavra1.filter(letras => vogais.includes(letras));
console.log(quanvogais);
console.log("A quantidade de vogais é: " + quanvogais.length);


