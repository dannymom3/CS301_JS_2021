"use strict";

function switchCase(s) {
    let to_upper = s.toUpperCase();
    let switched = ""
    for (let i = 0; i < s.length; i++) {
        if (to_upper[i] === s[i]) {
            switched += s[i].toLowerCase();
        } else {
            switched += to_upper[i]
        }
    }
    return switched;
}

console.log(switchCase(s))


