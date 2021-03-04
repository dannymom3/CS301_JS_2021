"use strict";

const { assert } = require("console");
const { cylinderVolume } = require("./volumeCylinder");

describe("checkPrime", function() {

    it("9 is not prime", function() {
        assert.strictEqual(checkMyPrime.isPrime(9), false);
    });
    it("7 is a prime number", function() {
        assert.strictEqual(checkMyPrime.isPrime(7), true);
    });
});


describe("The volume of the cylinder ", function() {
    it("area of a circle with radius 2 is 12."),
        function() {
            assert.strictEqual(volumeCylinder.cylinderVolume(), 12);
        });
});