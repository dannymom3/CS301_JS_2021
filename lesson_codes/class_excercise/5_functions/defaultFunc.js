"use strict";


function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(sum()); // 0 --> because the default value num1 = 0,  num2 = 0 makes zero
// without default values it becomes NaN
console.log(sum(5, 5)); // 10