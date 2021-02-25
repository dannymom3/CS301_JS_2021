"use strict";

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }

//continue inside a while loop
let j = 0;
while (j++ <= 20) {
    //j++; this is posible
    if (j % 2 == 0) {
        //j++; leads to infinite loop
        continue;
    }
    console.log(j);
}