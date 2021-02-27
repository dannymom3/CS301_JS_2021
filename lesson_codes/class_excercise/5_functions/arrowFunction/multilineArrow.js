"use strict";

let sum = (a, b) => { // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum(1, 2)); // 3