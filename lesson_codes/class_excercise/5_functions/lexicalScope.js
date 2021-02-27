"use strict";

/**
 * A lexical scope in JavaScript means that a variable defined outside a function
 *  can be accessible inside another function defined after the variable declaration.
 *  But the opposite is not true; the variables defined inside a function 
 * will not be accessible outside that function.
 */

let outerFunction = function() {

    if (true) {
        let x = 5;
        //console.log(y); //line 1, ReferenceError: y not defined
    }

    let nestedFunction = function() {

        if (true) {
            let y = 7;
            let x; //meeeee
            console.log(x); //line 2, x will still be known prints 5
        }

        if (true) {
            let y; // meeee
            console.log(y); //line 3, prints 7
        }
    }
    return nestedFunction;
}

let myFunction = outerFunction();
myFunction();