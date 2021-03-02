const prompt = require("prompt-sync")();

let message = prompt("Enter phrase ");
let num = parseInt(prompt("Enter integer number "), 0);

let text = "";
for (let i = 0; i < num; i++) {
    text += message;
    text += "\n"
}

console.log(text);