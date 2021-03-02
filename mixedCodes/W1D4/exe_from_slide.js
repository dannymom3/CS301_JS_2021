const prompt = require("prompt-sync")();

//Exercise first question
let output = "";
for(let i = 1; i<=5; i++){
    for(let k = 1; k<=5; k++){
        output += i;
    }
    output += "\n";
}
console.log(output);

//Exercise second question
// let output = "";
// for(let i = 1; i<=5; i++){
//     for(let k = 1; k<=5; k++){
//         output += k;
//     }
//     output += "\n";
// }
// console.log(output);
