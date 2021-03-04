"use strict";
let num1 = 5;
console.log(num1);
if (num1 == 5) {
    let num2 = 2 * num1;
    console.log(num2); //10
    console.log(num1); // x is accessible here., // x = 5
}
console.log(num1); // 5
console.log(num2); // y is not accessible here
/**
 *    outputs
 *     x = 5
 *     y = 10 inside the loop
 *     x = 5 
 *     x = 5 
 *     y ==> ERROR -- outside the loop
 */

// continue inside a for loop
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}