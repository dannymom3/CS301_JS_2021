// function maxMin(arr){
//     arr.sort((a,b) => a-b);
//     let max_min = [];
//     max_min.push(arr[arr.length-1], arr[0]);
//     return max_min;
//   }
//   console.log(maxMin([3,1,5,9,-4,9]))
const prompt = require ("prompt-sync")()
let input;
do{
  input = prompt("enter");
  console.log((input));
  input= input.toLowerCase();
  
} while(input!=="stop");