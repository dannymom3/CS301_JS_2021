"use strict";
/*
As we already know, a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:
*/
let obj = {
    for: 1,
    num: 2,
    return: 3,
};

console.log(obj.for+obj.num + obj.return); //6