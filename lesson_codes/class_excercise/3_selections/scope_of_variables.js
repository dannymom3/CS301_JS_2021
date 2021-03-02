"use strict";
let x = 5;
console.log(x);
if (x == 5) {
    let y = 2 * x;
    console.log(y); //10
    console.log(x); // x is accessible here., // x = 5
}
console.log(x); // 5
console.log(y); // y is not accessible here
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