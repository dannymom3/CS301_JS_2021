"use strict";
//Sum of digits use map
function mapping1(arr) {
    let l = arr.map(e => findSumOfDigits(e));
    return l;
}

function findSumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
        let value = num % 10;
        sum += value;
        num = Math.floor(num / 10)
    }
    return sum;
}

//TestPalidrom use map
function mapping2(arr) {
    let s = arr.map(e => testPalidrom(e));
    return s;
}

function testPalidrom(str) {
    let modified = str.toLowerCase();
    let i = 0;
    let j = modified.length - 1;
    while (i < j) {
        if (modified[i] !== modified[j]) {
            return false;
        }
        i++;
        j--
    }
    return true;
}

let l = ["madam", "car", "civic", "apple"];
let s = [22, 4324, 656, 678];
console.log(mapping1(s));
console.log(mapping2(l))