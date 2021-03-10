"use strict";
//Method 1 - using recursive method
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + (num - 2);
    }
}

let myNum = 5;
console.log(fibonacci(myNum));

//Method 2 - using Iteration loop

function fibonacci(num) {

}