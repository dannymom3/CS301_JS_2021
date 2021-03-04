"use strict";
/**
 * Write a function computeBill that takes units consumed and calculates and returns the electricity bill
 * amount based on the following rules
 * -------------------------------------------------------------------------------------
 *  unit                                               charge per unit
 * -------------------------------------------------------------------------------------
 *  First 50 units                                        @1.50
 * -------------------------------------------------------------------------------------
 * Next 100 units                                         @1.80
 * -------------------------------------------------------------------------------------
 * Rest                                                   @2.0
 * -------------------------------------------------------------------------------------
 * 
 * If the units consumed is less than 50 there is a 10% discount and if the units consumed is more than 
 * 150 there is surcharge of 5% of the the total charge
 * 
 * Examples:
 * ----------------------------------------------------------------------------------------------
 * units            function call            Returned result
 * ----------------------------------------------------------------------------------------------
 * 48 units         computeBill(48)         48 *1.5 - 10% of total = 64.8
 * ----------------------------------------------------------------------------------------------
 * 120 units        computeBill(120)        50 * 1.5 + 70 * 1.8 = 201
 * ----------------------------------------------------------------------------------------------
 * 172 units        computeBill(172)        50 * 1.5 + 100 * 1.8 + 22 * 2 + 5 % of total = 313.95
 * ----------------------------------------------------------------------------------------------
 */
const prompt = require("prompt-sync")();

let units = +prompt("Enter for electric charged units: ");

function computBill(units) {

    let result = 0;

    if (units < 50) {
        result = units * 1.5 - 0.1 * (units * 1.5);
    } else if (units < 150) {
        result = 50 * 1.5 + 100 * 1.8 + (units - 150) * 2; //??????

    } else {
        let beforeAddPercent = 50 * 1.5 + 100 * 1.8 + (units - 150) * 2;
        result = beforeAddPercent + (0.05 * beforeAddPercent);
    }

    return result;

}

let answer = computBill(units);

console.log(`The electricity bill for ${units} is $${answer}`);