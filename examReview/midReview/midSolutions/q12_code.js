"use strict";

/**
 * write a program for a shop that prints receipts for the purchase madee. First it asks for the number 
 * of items purchased and for each item it asks for the price of items. Once the total price is computed,
 * if the total price is more than $99, shop gives 10% discount to the customer before printing the receipt.
 * 
 * For example, if a customer purchases 3 items and price of items are $20, $30, and $50, this customer
 * should get receipt of $90 i.e ($100 - 10% of 100) Your program just needs to show the amount charched,
 * not the dicount.
 */

const prompt = require("prompt-sync")();

let numItems = +prompt("Enter the number of items you've purchased: ");
let total = 0;
for (let i = 1; i <= numItems; i++) {
    let price = +prompt("Enter the price of item " + i + ": ");
    total += price;
}

if (total > 99) {
    let amountPay = total - (0.1 * total);
    console.log(`The amount of purchad item(s) is ${amountPay}`);
}