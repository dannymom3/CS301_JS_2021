"use strict";

function A() {
    console.log("A is called");
    console.log("Before B is called");
    B();
    console.log("After B is called")
}

function B() {
    console.log("B is called");
    console.log("Before C is called");
    C();
    console.log("After C is called");
}

function C() {
    console.log("C is called");
}
A();
console.log("After A is called");