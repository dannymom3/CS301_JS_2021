"use strict";

function prefix(str1, str2) {
    let common_prefix = ""
    let length = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
        if (str1[i] !== str2[i]) {
            break;
        } else {
            common_prefix += str1[i]
        }
    }
    return common_prefix;
}

console.log(prefix(str1, str2))