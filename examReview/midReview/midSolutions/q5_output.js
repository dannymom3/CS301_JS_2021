"use strict";

let score1 = 40;
let score2 = 60;

let grade;

if (score1 > 40 && score2 > 50) {
    grade = 'A';
} else if (score1 > 40 || score2 > 50) {
    grade = 'A';
} else {
    grade = 'B';
}

console.log(grade);