"use strict"

/** write a program that points the numbers from 1 to 100. But for the multiple of three prints "Foo"
 * instead of the number for multiple of five prints "Bar" and for the numbers which are multipleof
 * both three and five prints "FooBar"
 */

// const prompt = require("prompt-sync")();

// let input = +prompt("Enter an integer number between 1 - 100: ");


//Method 1

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    } else if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else {
        console.log(i);
    }
}

//Method 2
for (let i = 1; i <= 100; i++) {

    let result = "";

    if (i % 3 === 0) result += "Foo";
    if (i % 5 === 0) result += "Foo";
    if (!result) result = i;
    console.log(result);
}