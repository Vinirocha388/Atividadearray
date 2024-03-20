//for vogais
let vogais = ["a", "e", "i", "o", "u"];
let texto = "Os lugares que eu frequento determinam o que eu procuro";

texto = texto.toLocaleLowerCase();

let arrayVogais1 = texto.split("");
let arrayVolgais = [];

for (let i = 0; i < arrayVogais1.length; i++) {
    if (vogais.includes(arrayVogais1[i])) {
        arrayVolgais.push(arrayVogais1[i]);
    }
}

console.log("texto orinal:", texto);
console.log("vogais encontradas:", arrayVolgais.toString());
console.log("total de vogais:" + arrayVolgais.length)

//for consoante
let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

texto = texto.toLocaleLowerCase();

let arrayLetras = texto.split("");
let arrayConsoantes = [];

for (let i = 0; i < arrayLetras.length; i++) {
    if (consoantes.includes(arrayLetras[i])) {
        arrayConsoantes.push(arrayLetras[i]);
    }
}

console.log("consoantes encontradas:", arrayConsoantes.toString());
console.log("total de consoantes: " + arrayConsoantes.length);

//for espaço
let espaço = [" "];

texto = texto.toLocaleLowerCase();

let arrayEspaço = texto.split("");
let arrayespaço = [];

for (let i = 0; i < arrayEspaço.length; i++) {
    if (espaço.includes(arrayEspaço[i])) {
        arrayespaço.push(arrayEspaço[i]);
    }
}

console.log("espaço encontradas:", arrayespaço.toString());
console.log("total de espaço: " + arrayespaço.length);