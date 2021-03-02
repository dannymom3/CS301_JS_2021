"use strict";
// Q1.
let i = 5;
while (i > 5) {
    console.log("Hello"); // it won't be excuted
}

//Q2.
for (let i = 5; i >= 5; i--) {
    console.log("Hello"); // Hello
}

//Q3.

for (let i = 5; i <= 5; i--) {
    console.log("Hello"); //ininite loop
}