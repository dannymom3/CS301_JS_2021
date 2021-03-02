/*
- Write a line of code using map method, that maps an array ["hi", "Hello", "bYe"] 
  to an array ["HI", "HELLO", "BYE"]
- Write a line of code that filters the above array so that the result array only has 
   values starting with "H" i.e. result should be ["HI", HELLO"]
   */

let arr = ["hi", "Hello", "bYe"];
let mapped_arr = arr.map(e => e.toUpperCase());
let filtered_arr = mapped_arr.filter(e => e[0] === "H")
console.log(mapped_arr)
console.log(filtered_arr)