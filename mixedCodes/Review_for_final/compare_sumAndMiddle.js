/*
Write a function that takes an array of numbers as an input and 
test whether the sum of first and last values in the array is equal to the middle value. 
If the array size is even middle value is the rounded average of two middle values. 
Return true if the test is successful, otherwise return false.
 */
function compareValue(arr) {
    let l = arr.length;
    let sum = arr[0] + arr[l - 1];

    let middle_val;
    if (l % 2 === 0) {
        middle_val = (arr[l / 2 - 1] + arr[l / 2]) / 2;
        middle_val = Math.round(middle_val);
    } else {
        middle_val = arr[(l - 1) / 2]
    }

    return (sum === middle_val)
}

let value = [4, 2, 9, 4, 5];
console.log(compareValue(value))