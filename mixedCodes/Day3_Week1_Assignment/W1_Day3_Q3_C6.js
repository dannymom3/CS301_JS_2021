const prompt = require('prompt-sync')();


let stud_name = prompt("Please enter your name ");
let credits = parseInt(prompt("Enter completed credits "));
let year;

if (credits < 30) {
    year = "freshman";
} else if (credits < 60) {
    year = "sophomore";
} else if (credits < 90) {
    year = "junior";
} else {
    year = "senior";
}

let output = stud_name + " is " + year;
console.log(output);


/** Defining Table:
 * 
Input: Get the students name from the user or database.
       Input credits the the student completed.

Process: If credits less than 30 the student is freshman.
         If credits between 30 and 60 the student is sophomor.
         If credits between 60 and 90 the student is junior.
         otherwise the student is senior.

output: Display the student's name and year in school.
 
 */