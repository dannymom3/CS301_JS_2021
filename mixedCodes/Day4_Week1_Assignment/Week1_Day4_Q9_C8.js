const prompt = require("prompt-sync")();

let value = parseInt(prompt("Enter number "));

let output = "";
for(let num = 1 ; num <= value; num++){
    output += `${num} ${2*num} ${3*num} ${Math.pow(num, 2)} ${Math.pow(num, 3)} \n`;
}
console.log(output);