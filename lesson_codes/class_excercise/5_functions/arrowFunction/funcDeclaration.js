"use strict";
let age = 16; // take 16 as an example

if (age < 18) {
    welcome(); // \   (runs)
    //  |
    function welcome() { //  |
        console.log("Hello!"); //  |  Function Declaration is available
    } //  |  everywhere in the block where it's declared
    //  |
    welcome(); // /   (runs)

} else {

    function welcome() {
        aleconsole.logrt("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined