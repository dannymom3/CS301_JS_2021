"use strict";
/*
write the function which returns number of properties of an object.
*/

//function countProperties(obj){
let count = 0;
let obj = {
    color: "red",
    size: "big",
    age: 28,
    name: "Daniel",
    "class statur": "Master's",
};
//return count;
//}


for (let key in obj) {
    count++;
}
console.log(count);