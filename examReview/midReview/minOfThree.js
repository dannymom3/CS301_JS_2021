"use strict";

function min_of_three(a, b, c) {
    let min = 0;
    if (a < b) {
        min = a;
    } else {
        min = b;
    }

    if (c < min) {
        min = c;
    }
    return min;
}

console.log(min_of_three(22, 4, 66));