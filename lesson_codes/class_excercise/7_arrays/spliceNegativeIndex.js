"use strict";
let arr = [1, 2, 5];

//from index -1 one step from the end
//delete 0 elements
// then insert 3 and 4

arr.splice(-1, 0, 3, 4, "danny"); //negative index
console.log(arr);


let arr1 = ["I", "go", "home"];

console.log(arr1.splice(1)); // ["go", "home"]
console.log(arr1); // ["I"]