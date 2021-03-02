let prompt = require('prompt-sync')();

// let grade = prompt("Please enter your grade: ");

// let gpa;

// if (grade === 'A') {
//   gpa = 4.0;
// } else if (grade === 'B') {
//   gpa = 3.6;
// } else if (grade === 'C') {
//   gpa = 3.2;
// } else {
//   gpa = 0.0;
// }

// console.log('your gpa is ' + gpa);

let sum = 0;

for(let i=0; i<10; i++){
  let num = parseInt(prompt("Enter number: "));
  if(num === 0) break;
  sum += num
}

console.log(sum)