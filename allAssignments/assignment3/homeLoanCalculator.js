"use strict";

/**
 * Write a program that calculates down payment for a home loan based on following rules. 
 * ------------------------------------------------------------------
 * Cost of House                         Down Payment
 * ------------------------------------------------------------------
 * $0 to less than 50K                5% of the cost
 * $50K to less than 100K             $1000 + 10% of (cost -$50K)
 * $100K to less than 200K            $2000 + 15% of (cost -$100K)
 * $200K and above                    $5000 + 10% of (cost -$200K)
 * ------------------------------------------------------------------
 */

const prompt = require("prompt-sync")();
let house_cost = +prompt("Enter the cost of the house: ");

let downPayment;

if (house_cost < 0) {
    downPayment = "Please enter a valid input"
} else if (house_cost < 50000) {
    downPayment = house_cost * 0.05;
} else if (house_cost < 100000) {
    downPayment = (1000 + (0.1 * (house_cost - 50000)));
} else if (house_cost < 200000) {
    downPayment = (2000 + (0.15 * (house_cost - 100000)));
} else {
    downPayment = (5000 + (0.1 * (house_cost - 200000)));
}

console.log(down_pay);
console.log(`The down payment for the house is ${downPayment}, and cost of house is ${house_cost}`)