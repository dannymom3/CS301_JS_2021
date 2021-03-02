"use strict"

//Replace using loop method.
function replaceAll_1(str, original, replace) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === original) {
            arr[i] = replace;
        }
    }

    let modified_str = arr.join(" ");
    return modified_str;
}

let str = "She said hi and i replied hi"
let original = "hi";
let replace = "hello"
console.log(replaceAll_1(str, original, replace))

//Replace using map method
function replaceAll_2(str, original, replace) {
    let arr = str.split(" ");
    function myMapper(e) {
        if (e === original)
            e = replace;
        return e;
    }

    let output = arr.map(myMapper)
    return output.join(" ");
}

// let str = "She said hi and i replied hi"
// let original = "hi";
// let replace = "hello"
console.log(replaceAll_2(str, original, replace))
