'use strict';
//Write a program that takes comma separated text from user and
//converts it into an array of words and prints in reverse order

let words = "Mequanint, Adugna, Belay";
let arr = words.split(",");
/*We can use reverse method.
   arr.reverse();
*/
let i=0;
let j=arr.length-1;
while(i<j){
    let swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
    i++;
    j--
}

console.log(arr)