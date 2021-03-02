
const prompt = require('prompt-sync')();


let status = prompt("Enter your status (student, faculty or other) ");
let overdue_books = parseInt(prompt("Enter number of overdue books "));
let loan_duration;

if(status === "student"){
    if(overdue_books === 0){
        loan_duration = "6 weeks";
    } else if(overdue_books < 3){
        loan_duration = "4 weeks";
    } else{
        loan_duration = "2 weeks";
    }
} else if(status === "faculty"){
    if(overdue_books === 0){
        loan_duration = "16 weeks";
    } else if(overdue_books < 3){
        loan_duration = "12 weeks";
    } else{
        loan_duration = "8 weeks";
    }
} else if(status === "other"){
    if(overdue_books === 0){
        loan_duration = "4 weeks";
    } else if(overdue_books < 3){
        loan_duration = "3 weeks";
    } else{
        loan_duration = "2 weeks";
    }
}

console.log(loan_duration);


/** Defining Table:
 
Input: Get the person's status and number of overdue books in the last year from the liberarian.

Process: Determine loan duration in weeks using the input data.

output: Display the loan duration to the liberarian.
 
 */


