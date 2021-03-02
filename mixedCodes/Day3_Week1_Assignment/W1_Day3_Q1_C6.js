
const prompt = require('prompt-sync')();


let first_num = parseFloat(prompt("Enter first number? ", 0));
let second_num = parseFloat(prompt("Enter second number? ", 0));

let abs_diff = Math.abs(second_num - first_num);

console.log(abs_diff);


/** Defining Table:
Input: Input first and second numbers from the user.

Process: Evaluate the absolute difference of two numbers using "Math.abs".

output: Display or store the output in the database.
 
 */