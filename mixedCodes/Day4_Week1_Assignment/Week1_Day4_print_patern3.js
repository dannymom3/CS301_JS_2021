
let pattern = "";
for(let i=5; i>=1; i--){
    for(let k = i; k >= 1; k--){
        pattern += i;
    }
    pattern += "\n";
}

console.log(pattern);