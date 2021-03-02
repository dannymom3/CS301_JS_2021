//Use array filter method to filter out strings that contains "_" from a string array.


function filtered(arr){
let output = arr.filter(e => e.indexOf("_") === -1);
return output;
}
let arr = ["mekuy","Howareyou", "ay_u", "Hi_there"];
console.log(filtered(arr))
