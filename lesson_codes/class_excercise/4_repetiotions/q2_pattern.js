"use strict";

let n = 5; // you can take input from prompt or change the value
let row = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        row += i;
    }
    row += "\n";
}
console.log(row);