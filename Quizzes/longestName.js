"use strict";

function longestName(arr) {
    let longest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }

    return longest;
}
console.log(longestName(["Australia", "Germany", "United States of America"])) // United States of America