
let row="";
for(let i = 1; i<=12; i++){  
    for(let j=1; j<=12; j++){
        row += i*j +"\t";
    }
    row += "\n"
}
    console.log(row);