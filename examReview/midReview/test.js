"use strict";
// let x = "hello";
// let y = true;
// let z = 6;
// let a = undefined;
// let b = " "; //empty string
// console.log(x - y);
// console.log(z + a);
// console.log(y + a);
// console.log(y + z);
// console.log(x + b);

// let x = 1,
//     y = 7;
// let message = "Hi";
// if (x < 2) {
//     if (y > 7) {
//         message = "Bye";
//     } else {
//         message = "Holla";
//     }
// } else {
//     message = "Hello";
// }
// console.log(message);

// for (let i = 0; i > 3; i++) {
//     console.log("hello");
// }

// let i = 0;
// while (i < 3) {
//     console.log("snow");
//     i++;
// }

function secondSmallest(a, b, c) {

    if (a < b) { // case1: a < b            
        if (c < b)
            return a;
        else if (b < c)
            return b;
        else
            return c;

    } else { // case2: a > b
        if (a < c)
            return a;
        else if (b > c)
            return b;
        else
            return c;
    }
}
console.log(secondSmallest(12, 43, 6));
console.log(secondSmallest(12, 10, 8));