"use strict";
/**
 * 
 * @param {String} str user input String
 * @return{boolean} returns true if the user input string is a palindrome,
 * otherwise return false
 */
function testPalindrome(str) {
    if (str.length === 0 || str.length === 1)
        return true;
    else {
        if (str[0] === str[str.length - 1])
            return testPalindrome(str.substr(1, str.length - 2));
        else
            return false;
    }
}
console.log(testPalindrome("madam"));