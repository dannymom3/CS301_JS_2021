
let pattern = "";
for(let i=1; i<=5; i++){
    for(let k = 1; k <= i; k++){
        pattern += i;
    }
    pattern += "\n";
}

console.log(pattern);