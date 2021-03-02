const prompt = require("prompt-sync")();


let num = parseInt(prompt("Enter integer number "), 0);

let sum = 0; 
for(let i = 1; i <= num; i++){
    if(i % 2 !== 0){
        sum += i;
    }    
}
console.log(sum);

