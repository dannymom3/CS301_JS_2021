"use strict";

function find_median(a, b, c) {
    if (a < b) {
        if (b < c)
            return b; // a b c
        if (c < a)
            return a; // c a b
        return c; // a c b
    }
    if (b < c) return a < c ? a : c; // b a c : b c a

    return b; // c b a
}
console.log(find_median(5, 54, 21));
console.log(find_median(3, 44, 1));