"use strict";
//Rewrite with arrow function
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
);

//-------------------------------------------------------------------
//Arrow function
let ask = (question, yes, no) => confirm(question) ? yes() : no();


ask(
    "Do you agree?",
    () => { console.log("You agreed."); },
    () => { console.log("You canceled the execution."); }
);