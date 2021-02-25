"use strict";
/**
 * A university library that loans book to students, faculty, and the public has a written
 *  policy that determines how long someone may borrow a book before it is due, 
 * which is shown on the table below. Write adefining table and 
 * JavaScript program that determines how long a person may borrow a book.
 * ---------------------------------------------------------------------------
 * Status          Number of books Overdue         Loan duration in weeks 
 * ---------------------------------------------------------------------------
 * Student            0                                  6
 *                  fewer than 3                         4
 *                  3 or more                            2  
 * --------------------------------------------------------------------------- 
 * Faculty          0                                    12
 *                 fewer than 3                          10
 *                 3 or more                             8
 * ---------------------------------------------------------------------------
 * other           0                                     4
 *                fewer than 3                           3
 *                3 or more                              2
 * ---------------------------------------------------------------------------
 */
const prompt = require("prompt-sync")();
let status = prompt("Enter your status (student, faculty or other) ");
let overdue_books = parseInt(prompt("Enter number of overdue books "));
let loan_duration;

if (status === "student") {
    if (overdue_books === 0) {
        loan_duration = "6 weeks";
    } else if (overdue_books < 3) {
        loan_duration = "4 weeks";
    } else {
        loan_duration = "2 weeks";
    }
} else if (status === "faculty") {
    if (overdue_books === 0) {
        loan_duration = "16 weeks";
    } else if (overdue_books < 3) {
        loan_duration = "12 weeks";
    } else {
        loan_duration = "8 weeks";
    }
} else if (status === "other") {
    if (overdue_books === 0) {
        loan_duration = "4 weeks";
    } else if (overdue_books < 3) {
        loan_duration = "3 weeks";
    } else {
        loan_duration = "2 weeks";
    }
}

console.log(loan_duration);


/** Defining Table:
 
Input: Get the person's status and number of overdue books in the last year from the liberarian.

Process: Determine loan duration in weeks using the input data.

output: Display the loan duration to the liberarian.
 
 */