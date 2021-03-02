const prompt = require("prompt-sync")();
//while loop
// let age = parseInt(prompt("Enter age "));

// while(age < 19){
//     age = parseInt(prompt("Enter age "));
//     console.log(age);
// }
// console.log("Exiting");

//do while loop

let age; 
do{
   age = parseInt(prompt("Enter age "));
   console.log(age);
} while(age < 19)
console.log("Exiting")