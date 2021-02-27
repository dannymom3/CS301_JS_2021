"use strict";
let x = 10;

function main() {
    let x;
    console.log("x1: " + x);
    if (x > 0) {
        let x = 30;
        console.log("x2: " + x);
    }
    x = 40;
    let f = function(x) {
        console.log("x3: " + x);
    }
    f(50);
}
main();