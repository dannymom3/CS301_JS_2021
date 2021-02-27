"use strict";

function b() {
    function a() {
        console.log(x);
    }
    let x = 10;
    a();
    console.log(x);
}
let x = 20;
b();