"use strict";
//Method 1
function isPerfectPrime(arr) {
    let isPrime = true;
    for (let i = 1; i < arr.length; i += 2) {
        for (let k = 2; k < arr[i]; k++) {
            if (arr[i] % k === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

console.log(isPerfectPrime(arr))

//Method 2
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

function checkPrime(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        if (!isPrime(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime([1, 3, 5, 5, 6, 41]))