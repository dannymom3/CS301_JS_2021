const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter integer number "), 0);

let letter = "sunshine"
let text = "";
for(let i = 0; i < num; i++){
    text += letter;
    text += "\n"
}

console.log(text);