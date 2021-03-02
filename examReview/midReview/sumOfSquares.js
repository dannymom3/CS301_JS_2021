"use strict";

function sumOfSquares(n) {

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += (i * i);
    }
    return result;
}

console.log(sumOfSquares(5));

console.log("---------------------------");

let num = 2;
let count = 0;

do {
    let result = (Math.pow(num, count));
    console.log(result + " , \t");
    count++;
} while (count <= 31);