"use strict";

// function secondSmallest(a, b, c) {

//     if (a < b) {
//         if (b < c)
//             return b;
//         if (c < a)
//             return b;
//     } else {
//         if (c < b)
//             return b;
//         if (c < a)
//             return a;
//     }
//     return c;
// }

// console.log(secondSmallest(5, 4, 6));

function minThree(a, b, c) {
    if (a < b) {
        if (a > c)
            return a;
        else if (b < c)
            return b;
        else
            return c;
    } else { //else means b less than a
        if (a < c)
            return a;
        else if (a > c)
            return b;
        else
            return c;
    }
}

console.log(minThree(33, 55, 76))
console.log(minThree(-1, 0, 4));