// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3const


//Dichiaro un array chiamato alphasArray 
const alphaArray = ["a", "b", "c"];

//Dichiaro un array chiamato nuberArray 
const numberArray = [1, 2, 3];

let mixedArray = [];


for (let i = 0; i < alphaArray.length; i++) {

    mixedArray.push(numberArray[i]);
    mixedArray.push(alphaArray[i]);

}

document.getElementById("mixArray").innerText = mixedArray;

//stampo in console
console.log(mixedArray);