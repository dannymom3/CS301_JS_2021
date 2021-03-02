"use strict";

function suffix(str1, str2) {
    let suffix = ""
    let count = 0;
    let length1 = str1.length;
    let length2 = str2.length;

    while (true) {
        if (str1[length1 - 1 - count] !== str2[length2 - 1 - count]) {
            break;
        } else {
            suffix = str1[length1 - 1 - count] + suffix;
            count++;
        }
    }
    return suffix;
}

console.log(suffix(str1, str2))