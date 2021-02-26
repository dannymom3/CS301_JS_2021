"use strict";

let n = 20;
let i = 1;
while (i <= n) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++; //outside the inner loop

    //OR without the inner loop, i+=2 does it 
}