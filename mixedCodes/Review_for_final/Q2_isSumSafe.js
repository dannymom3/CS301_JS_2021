/*Define an array to be sum-safe if none of its elements is equal to the sum of its elements. 
The array a = [5, -5, 0] is not sum-safe because the sum of its elements is 0 and a[2] == 0. 
However, the array a = [5, -2, 1] is sum-safe because the sum of its elements is 4 and none of its elements equal 4.
Write a function named isSumSafe that returns true if its argument is sum-safe, otherwise it returns false.
For example, isSumSafe([5, -5, 0]) should return false and isSumSafe([5, -2, 1]) should return true.
Return false if the array is empty.
*/
function isSumSafe(arr){
if(arr.length === 0) return false;
    let sum = arr.reduce((a,b) => a+b);
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === sum)
        return false;
    }
    return true;
}

let number = [2,3,-4,6,-4];
console.log(isSumSafe(number))