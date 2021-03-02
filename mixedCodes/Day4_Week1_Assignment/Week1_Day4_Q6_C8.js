
const given_val = 2;
let output = "";
for(let i = 0; i <= 31; i++){ 
    let result = Math.pow(given_val, i);
    output += result;
    if(i === 31) break;
    output += ", "  
}
console.log(output);

