"use strict";
//part 1
// let y = "111";
// let z = !!y;
// console.log(z); //true
// console.log(typeof z); //boolean

for (let i = 1; i <= 10; i++) {
    for (let j = i; j <= 10; j++) {
        if (j <= 7) {
            continue;
        }
        if (i * j >= 16) {
            break; // this break statement only breaks from theinner loop  
        }
        console.log(j); //8, 9, 10
    }
    if (i === 3) {
        break;
    }
    console.log(i);
}