"use strict";

function b() {
    function a() {
        console.log(x);
    }
    a();
    console.log(x);
}
let x = 20;
b(); // 20