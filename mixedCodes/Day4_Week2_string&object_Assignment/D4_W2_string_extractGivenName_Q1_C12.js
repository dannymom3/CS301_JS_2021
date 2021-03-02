"use strict";

function extractGivenName(fullName) {
    let comma = fullName.indexOf(" ");
    let given_name = fullName.substring(++comma);
    return given_name;
}

console.log(extractGivenName(fullName))