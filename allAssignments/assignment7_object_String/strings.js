"use strict";

/*
Write the function getAverageAge(users) that gets an array of 
objects with two properties name and age and returns the average age.
--------------------------------------------------------------------
 input                                           output
--------------------------------------------------------------------
[{name : "abc", age : 20},               15 (average of 10 and 20)
{name : "xyz", age : 10}]
--------------------------------------------------------------------
*/

/**
 * 
 * @param {Object} users objects that creates using users object variable
 * @return {number} returns the the average age 
 */
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let Daniel = { name: "Daniel", age: 28 };
let Haile = { name: "Haile", age: 50 };
let Alex = { name: "Alex", age: 30 };
let Mom = { name: "Mom", age: 45 };

let arr = [Daniel, Haile, Alex, Mom];
console.log(getAverageAge(arr));


const prompt = require("prompt-sync")();
/*
write a function   that returns true if str contains text "lottery" or "prize",
otherwise return false.
*/
/**
 * 
 * @param {String} str user input String
 * @return {boolean} returns true if the string contains lottery or prize, otherwise
 * returns false
 */
function checkSpam(str) {

    if (str !== "lottery" && str !== "prize") {
        return false;
    } else {
        return true;
    }

}

let inputStr = prompt("Enter a string: ");
let result = checkSpam(inputStr);
console.log(result);


/**
 * 
 * @param {String} str1 first user input String
 * @param {String} str2 second user input String
 * @return {String} returns prefix String of the two common user inputed Strings
 */
function prefix(str1, str2) {
    let newStr = "";
    let count = 0;
    while (true) {
        if (str1[0 + count] === str2[0 + count]) {
            newStr = newStr + str1[0 + count];
            count++;
        } else {
            break;
        }

    }
    return newStr;
}
//expected output //disa
console.log(prefix("disadvantage", "disallowed"));

/*
Write a swap function that takes two parameters of number
 type and swap the values of the passed parameters.
 */
/**
 * 
 * @param {number} num1 first input number by the user
 * @param {number} num2 second user input number
 * @return {number} returns the swapped number of the user input
 */
function swap(num1, num2) {
    let temp;
    temp = num1;
    num1 = num2;
    num2 = temp;

    return num1 + "," + num2;
}

let xxx = 5;
let yyy = 7;
console.log(xxx, yyy); // 5, 7
//swap(xxx, yyy);
console.log(swap(xxx, yyy)); // 7, 5

/*Write a function named titleCase with one parameter named str. 
This function returns a copy of s but with the first letter of each word capitalized.
--------------------------------------------------------------------------------------
*/
/**
 * @author Daniel Haile
 * @param {String} str user input String
 * @return {String} returns first letter upperCase String
 */
function titleCase1(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
}
//E.g. expected output is //DANIEL
console.log(titleCase1("dANIEL"));

module.exports = { getAverageAge, checkSpam, prefix, swap, titleCase1 };