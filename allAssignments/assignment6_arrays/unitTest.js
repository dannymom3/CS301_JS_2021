"use strict";

// replace file_name with your file name
const arrays = require("./unitTest.js");


const assert = require("assert");
/* 1.	Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of first and last elements of the array. */
describe("addend", function() {

    it("tests addend even number of elements", function() {
        assert.strictEqual(-56, arrays.addends([-1, -100, 1, 2, 3, -55]));
    });
    it("tests addend odd number of elements", function() {
        assert.strictEqual(10, arrays.addends([-10, 2, 3, 4, 20]));
    });

});

/* 2.	Write a function named getMiddle that returns the value of the middle element in an array. If 
the array has an even number of elements, then this function must return the average of the two middle elements. */
describe("getMiddle", function() {

    it("tests getMiddle even number of elements", function() {
        assert.strictEqual(1.5, arrays.getMiddle([-1, -100, 1, 2, 3, -55]));
    });
    it("tests getMiddle odd number of elements", function() {
        assert.strictEqual(3, arrays.getMiddle([-10, 2, 3, 4, 20]));

    });

});

/* 3.	Write a function to rotate the elements in an array to the left by 1. */
describe("rotateLeft", function() {

    it("tests rotateLeft even number of elements", function() {
        assert.deepStrictEqual([-100, 1, 2, 3, -55, -1], arrays.rotateLeft([-1, -100, 1, 2, 3, -55]));
    });
    it("tests rotateLeft odd number of elements", function() {
        assert.deepStrictEqual([2, 3, 4, 20, -10], arrays.rotateLeft([-10, 2, 3, 4, 20]));
    });

});

/* 4.	Write a function to rotate the elements in an array to the right by 1. */
describe("rotateRight", function() {

    it("tests rotateRight even number of elements", function() {
        assert.deepStrictEqual([-55, -1, -100, 1, 2, 3], arrays.rotateRight([-1, -100, 1, 2, 3, -55]));
    });
    it("tests rotateRight odd number of elements", function() {
        assert.deepStrictEqual([20, -10, 2, 3, 4], arrays.rotateRight([-10, 2, 3, 4, 20]));
    });

});

/* 5.	Modify each rotate function to rotate array by n times where, n is the second parameter passed in the function (EC). n < number of elements */
describe("rotateNRight", function() {

    it("tests rotateNRight 3", function() {
        assert.deepStrictEqual([2, 3, -5, -1, -100, 1, 2], arrays.rotateNRight([-1, -100, 1, 2, 3, -55], 3));
    });
    it("tests rotateNRight 4", function() {
        assert.deepStrictEqual([2, 3, 4, 20, -10], arrays.rotateNRight([-10, 2, 3, 4, 20]));
    });

});

/* 6.	Write a JavaScript function that takes a string of  numbers as comma separated values, e.g, â€œ32, 105,  -22â€,  and stores it into an array, e.g., [32, 105, -22] and do following operations
a.	Filters out negative values
b.	Maps the filtered elements to sum of its digits
c.	Reduce to get sum of all the elements and returns this value
*/
describe("filter map reduce string", function() {
    it("tests 32, 105,  -22 ", function() {
        assert.strictEqual(11, arrays.fmrString("32, 105,  -22"));
    });
});

/* 7.	Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. */
describe("filterRange", function() {
    it("tests [0, 100, 3, 6, -555], 6, 60", function() {
        assert.strictDeepEqual([100, 6], arrays.filterRange([0, 100, 3, 6, -555], 6, 60));
    });
});

/* 8.	Write a function that takes an array of strings and returns array of palindrome strings only. */
describe("filterPalindromes", function() {
    it("tests [not, a, kayak, eagle, racecar]", function() {
        assert.strictDeepEqual(["a", "kayak", "racecar"], arrays.filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]));
    });
});

//* 9. Do matrix addition and return result on matrix format for following:
describe("Matrix", function() {
    describe("add Matrix", function() {
        it("matrix addition of [[0,1,2],[9,8,7]] and [[6,5,4], [3,4,5]] should be [ [ 6, 6, 6 ], [ 12, 12, 12 ] ]", function() {
            assert.deepStrictEqual(addMatrix([
                [0, 1, 2],
                [9, 8, 7]
            ], [
                [6, 5, 4],
                [3, 4, 5]
            ]), [
                [6, 6, 6],
                [12, 12, 12]
            ]);
        });
    });
});