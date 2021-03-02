const prompt = require("prompt-sync")();

// a function that takes a parameter and return a value
function isOdd(n){
	return n%2!==0;
}

let input = prompt("Please enter a number to see if it a odd number: ");

// inbuilt funciton is called and returned result is saved in a variable.
let test_number = parseInt(input);

// user defined funciton is called and returned result is saved in a variable.
let result = isOdd(test_number);
console.log(result);