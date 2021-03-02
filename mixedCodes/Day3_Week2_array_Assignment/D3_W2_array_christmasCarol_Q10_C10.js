"use strict";
const prompt = require("prompt-sync")()

let number_arr = [
    'first', 'second', 'third', 'fourth', 'fifth', 'six', 'seventh',
    "eighth", "ninth", "tenth", "eleventh", "twelveth"
];

let gifts = [
    "a part ridge in a pirr tree", 'two turtle doves', 'three french hens', 'four calling bird',
    'five golden rings', 'six geese a laying', 'seven swans a swimming', 'eight maids a milking',
    'nine ladies dancing', 'ten lords a leaping', 'eleven pipers piping', 'twelve drummers drumming'
];

function twelveDaysOfChristmas(gifts, number_arr) {

    let input = parseInt(prompt("Please enter integer number between 1 and 12: "));
    let message = `On the ${number_arr[input - 1]} day of christmas, my true love gave to me:\n `

    for (let i = input - 1; i >= 0; i--) {
        if (input === 1) {
            return message + gifts[input - 1]
        }
        if (i === 0) {
            message += "and " + gifts[i];
            break;
        }
        message += gifts[i] + ",\n "
    }
    return message;
}

console.log(twelveDaysOfChristmas(gifts, number_arr))