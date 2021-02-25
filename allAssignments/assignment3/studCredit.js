"use strict";
/**
 * Write a program that reads from the keyboard a student's name and 
 * number of completed credits and then outputs the student's name and 
 * label on following rules:
         a."Freshman" if 0<credits<30
         b."Sophomore" if 30<=credits<60
         c."Junior" if 60<=credits<90
         d."Senior" if credits>90
 */
const prompt = require("prompt-sync")();
let studentCredit = prompt("Enter student's credit: ");
let studentName;

if (studentCredit > 0 && studentCredit < 30) {
    studentName = "freshman";
} else if (studentCredit >= 30 && studentCredit < 60) {
    studentName = "sophomore";
} else if (studentCredit >= 60 && studentCredit < 90) {
    studentName = "junior";
} else {
    studentName = "senior";
}

console.log(`The student name is ${studentName} and has credit amount ${studentCredit}`);