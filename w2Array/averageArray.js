"use strict";
let score = [10, 20, 30, 40, 50];

console.log(score);
/**
 * 
 * @param {array} arr is an array to calculate the average score
 * @return {number} returns the average of scores  
 */
function findAverage(arr) {

    let sum = 0,
        average;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length;
    }
    return average;
}
let myArr = [10, 20, 30, 40, 50];

let answer = findAverage(myArr);
console.log(answer);


let myScore = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
    myScore[i] = Math.floor(Math.random() * 10);
    sum += myScore[i];
}
let average = sum / myScore.length;
console.log(average);