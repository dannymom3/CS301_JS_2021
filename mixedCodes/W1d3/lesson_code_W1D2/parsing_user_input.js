let prompt = require('prompt-sync')();
let user_input = prompt("Please enter a fraction number: ");
console.log("---------------visual separator---------------");
console.log(user_input)
console.log(typeof user_input)
console.log("---------------visual separator---------------");
let num = parseFloat(user_input);
console.log(num)
console.log(typeof num)
console.log("---------------visual separator---------------");
let int_part_only = parseInt(user_input);
console.log(int_part_only)
console.log(typeof int_part_only)
console.log("---------------visual separator---------------");