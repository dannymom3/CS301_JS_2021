"use strict";
let x = 10;

function main() {
    let x = 0;
    console.log("x1 is " + x);
    x = 20;
    console.log("x2 is " + x);
    if (x > 0) {
        x = 30;
        console.log("x3 is " + x);
    }
    console.log("x4 is " + x);

    function f(x) { console.log("x5 is " + x); }
    f(50);
    console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);