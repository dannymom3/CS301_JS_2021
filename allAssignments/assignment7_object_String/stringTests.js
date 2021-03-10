//stringTests.js


"use strict";

const assert = require("assert");

const str = require("./strings.js"); //nothing implemented yet 2/16/2021

/*

2. Write the function countProperties(obj) which returns number of properties of an object.

*/

describe("countProperties", function() {

    it("2 properties", function() {

        const bob = { name: "Bob", age: 10 }

        assert.strictEqual(str.countProperties(bob), 2);

    });

});


/*

3.  Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false.

*/

describe("checkSpam", function() {



    it("contains prize and lottery", function() {

        const string1 = "there is a prize in the lottery"

        assert.strictEqual(str.checkSpam(string1), true);

    });

    it("does not contain prize or lottery", function() {

        const string2 = "there is a prize in the lottery"

        assert.strictEqual(str.checkSpam(string2), false);

    });

});


/*

4. Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming”

and “walking” is “ing”. This function takes two parameters and returns the common suffix.

*/

describe("suffix", function() {

    it( //write a test case



    );



    it( //write another test case



    );

});





/* 

5.  Write a function named titleCase with one parameter named s. This function returns a copy of s but with the first letter of each word capitalized.

*/

describe("titleCase", function() {



    it( //write a test case



    );



    it( //write another test case



    );

});



/*

7.Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.

Write a test for test case:  [{name:"abc", age:20},

{name:"xyz", age:10}]

expected:  15

*/