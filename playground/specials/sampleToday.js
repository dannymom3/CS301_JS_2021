"use strict";

let message = 99;
let result;

function myGrade(result) {
    if (message > 98) {
        result = ("grade is A")
    } else if (message > 97) {
        result = ("Grade B")
    } else {
        result = ("c")
    }
}
//result = "Hello";
let answer = myGrade(result);
console.log(answer);