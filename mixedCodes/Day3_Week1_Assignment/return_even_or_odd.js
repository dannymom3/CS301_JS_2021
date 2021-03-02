
const prompt = require('prompt-sync')();


let number = parseInt(prompt("Enter integer number "));

let output;
if(number % 2 === 0){
    output = "The number is Even"
} else{
    output = "The number is odd"
}

console.log(output);


/** Defining Table:
Input: Input the number from the user.

Process: If the number divided by two gives us remainder zero, the number is even
         otherwise the number is odd.

output: Display or store the output in the database.
 
 */