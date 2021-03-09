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