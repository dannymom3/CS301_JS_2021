/*Write a function that takes an array of strings as an input and 
replaces all the string values that starts with "h" or "H" and 
has length less than 3 with the string "invalid" and 
returns the number of invalid strings in the given array.

Input
["Bye", "Hello", "Hi", "Test", "Ho", "he"]
output
["Bye", "Hello", "invlaid", "Test", "invlaid", "invlaid"],
Return value will be 3
a. Once the above function is working, make it more reusable by 
   taking the minimum length of string as a parameter instead of making it a fixed value of 3.
b. Now, also take the starting character as a parameter also, 
   instead of fixed hard coded character of "h" or "H"
*/

function count_invalid(arr, str_length, starting_chr) {
    let count = 0;
    let invalid_arr = [];
    starting_chr = starting_chr.toLowerCase()
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i][0].toLowerCase();
        let length = arr[i].length;

        if (value === starting_chr && length < str_length) {
            invalid_arr.push("invalid");
            count++;
        } else {
            invalid_arr.push(arr[i])
        }
    }
    return count;
    //return invalid_arr;
}

let arr = ["Bye", "Hello", "Hi", "Test", "Ho", "he"];
let str_length = 3
let starting_chr = "h"
console.log(count_invalid(arr, str_length, starting_chr));//3