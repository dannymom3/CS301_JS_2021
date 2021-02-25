"use strict";

/**
 * Write a defining table and then a program that determines what time a child should 
 * go to bed. Your program must read a child’s age and the season (winter, spring, 
 * summer, or fall) from the keyboard and output the child’s bedtime according to this table:
 * --------------------------------------------------------------------
 *    Age                     Season                Bed Time
 * --------------------------------------------------------------------
 *   5 or younger         summer, fall               8:30 PM      
 *                        winter, spring             8:00 PM 
 * --------------------------------------------------------------------
 *   6 to 12              summer                     9:30 PM
 *                        winter, spring, fall       8:30 PM
 * --------------------------------------------------------------------
 *   13 and older         summer                     10:30 PM
 *                        winter, spring, fall       9:30 PM
 * --------------------------------------------------------------------
 */
const prompt = require("prompt-sync")();

let age = parseInt(prompt("Please enter age ", 0));
let season = prompt("Enter the season ");
let bed_time;

if (age < 6) {
    if (season === "summer" || season === "fall") {
        bed_time = "8:30 p.m."
    } else if (season === "winter" || season === "spring") {
        bed_time = "8:00 p.m."
    }
} else if (age < 13) {
    if (season === "summer") {
        bed_time = "9:30 p.m."
    } else if (season === "winter" || season === "fall" || season === "spring") {
        bed_time = "8:30 p.m."
    }

} else {
    if (season === "summer") {
        bed_time = "10:30 p.m."
    } else if (season === "winter" || season === "fall" || season === "spring") {
        bed_time = "9:30 p.m."
    }
}

console.log(bed_time);


/* Defining Table:
  
Input: Get the child's age and the season from the user.

Process: Determine what time the child should go to bed using the child's age and season.

output: Out put the child's bed time.
 
 */