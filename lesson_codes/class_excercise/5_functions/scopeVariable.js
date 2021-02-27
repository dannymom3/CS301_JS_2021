"use strict";

let message = "Daniel";

function showMessage() {
    let message = `Hello  good morning!`; //variable shadowing occur, 
    //it shadows the outer one.
    console.log(message);
}
showMessage();

//console.log(message); ERROR!  outside the loop