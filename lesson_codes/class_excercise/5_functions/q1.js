"use strict";

function a() {
    console.log(x); // consult Global for x and print 20 from Global
}

function b() {
    let x = 10;
    a(); // consult Global for a
    console.log(x);
}
let x = 20;
b();