"use strict";

const prompt = require("prompt-sync")();
let number = [
    'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seventh',
    "eighth", "ninth", "tenth", "eleventh", "twelveth"
];

let gift = [
    "A part ridge in a pirr tree", 'Two turtle doves', 'Three french hens', 'Four calling bird',
    'Five golden rings', 'six geese a laying', 'seven swans a swimming', 'eight maids a milking',
    'nine ladies dancing', 'ten lords a leaping', 'eleven pipers piping', 'twelve drummers drumming'
];

function christmasGift(num, gift) {

    let input = parseInt(prompt("Please enter integer (1 to 12): "));
    let message = "On the " + num[input - 1] + " day of christmas, my true love gave to me:\n "

    let index = input - 1
    while (index >= 0) {
        message += gift[index] + ",\n "
        index--
    }
    return message;
}

console.log(christmasGift(number, gift))