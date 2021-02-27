"use strict";

function funX(a, b) {
    let c;
    c = 5;
    funY(a * c, "yes");
    console.log(b);
}

function funY(x, y) {
    let z;
    z = "I can see the sea";
    console.log("What is on the stack here?");
}

function main() {
    let a;
    let b;
    a = "Hello";
    funX(3, a);
    b = "World";
}
main();