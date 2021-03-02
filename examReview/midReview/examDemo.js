"use strict";
/* global assert isVowel*/
describe2("isVowel", vowelTest);
   

function vowelTest () {

    it2("a is vowel", isVowela);

    it2("e is vowel", isVowele);
}

function isVowele () {
    return myAssert(isVowel("e"), true);
}
function isVowela () {
    return myAssert(isVowel("a"), true);
}

function describe2(str, foo) {
    console.log("about to run this test set: " + str);
    foo();
}

function it2(str, bar) {
    const result = bar();
    console.log(str +  " test returned: " + result );
}

function isVowel( n) {
    return ['a', "i", "o", "u"].includes(n);
}

function myAssert(theTestVal, expected) {
    if (theTestVal === expected) {
        return true;
    } else {
        return false;
    }
}