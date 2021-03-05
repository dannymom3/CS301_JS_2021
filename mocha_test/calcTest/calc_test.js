"use strict";
const assert = require("assert");
// name of the file should match
const myCalc = require("./calc.js"); //dot slash is the current folder itself

describe("add", function() {

    it("5 plus 5 is 10", function() {
        assert.strictEqual(myCalc.add(5, 5), 10); //myCalc is anything, just any variable 
        // not the file name
    });
    it("1 plus 0 is 1", function() {
        assert.strictEqual(myCalc.add(1, 0), 1);
    });

    it("1 plus -1 is 0 ", function() {
        assert.strictEqual(myCalc.add(1, -1), 0);
    });
});

describe("sub", function() {

    it("5 minus 5 is 10", function() {
        assert.strictEqual(myCalc.sub(5, 5), 0);
    });
    it("1 minus 0 is 1", function() {
        assert.strictEqual(myCalc.sub(1, 0), 1);
    });

    it("1 minus -1 is 0 ", function() {
        assert.strictEqual(myCalc.sub(1, -1), 2);
    });

});

describe("divide", function() {

    it("5 divide by 5 is 1", function() {
        assert.strictEqual(myCalc.div(5, 5), 1);
    });
    it("1 divide by 0 is Infinity", function() {
        assert.strictEqual(myCalc.div(1, 0), Infinity);
    });

    it("20 divide by -1 is -20 ", function() {
        assert.strictEqual(myCalc.div(20, -1), -20);
    });

});