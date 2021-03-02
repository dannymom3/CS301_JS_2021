/*
Write a line of code that reduce the given array into average value of length of 
all the strings in the array 
*/
//To get the reduced value we need to change the string array to numbers using map method.
let arr = ["hiyos", "Hellos", "bYes3"];
let l = arr.length;
let reduced_arr = Math.round((arr.map(e => e.length).reduce((a,b) => a+b))/l);
console.log(reduced_arr)
