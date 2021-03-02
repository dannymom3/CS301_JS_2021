/*An OneTwoOne array is defined as an array that has 1 as first 
and last elements and rest of the elements of the array are 2. 
Write a function isOneTwoOne that takes an array as parameter 
and returns whether the given array is OneTwoOne array or not.
Input
Output
[1,2,2,1]
True
[1,2,2,2,2,2]
False (because last element is not 1)
[1,2,2,3,2,1]
False (because of 3)
*/

function isOneTwoOne(arr) {
    if (arr.length < 3) return false;
    let l = arr.length - 1;
    for (let i = 1; i < l; i++) {
        if (arr[i] !== 2) {
            return false;
        }
    }
    return (arr[0] === 1 && arr[l] === 1)

}

let value = [1, 2, 1];
console.log(isOneTwoOne(value))