/*1, write javaScript function "isBalanced" that accept one argument, an array of two numbers 
   if one number of the array is positive and the other is negative return true else return false
    EXAMPLE:- isBalanced([5,-2])// return "true"
	          isBalanced([-5,2])// return "true"
			  isBalanced([5,2])// return "false"
			  */


function isBalanced(arr) {
    if ((arr[0] < 0 && arr[1] > 0) || (arr[1] > 0 && arr[0] < 0)) {
        return true;
    } else {
        return false;
    }
}
console.log("isBalanced");
console.log(isBalanced([22, -3]));
console.log(isBalanced([-22, -3]));
console.log(isBalanced([-22, 3]));
console.log(isBalanced([22, 3]));

/**
 * 2) Find largest value in the given array
 */
//Method 1
function findLargest(arr) {
    let largest = Math.max(arr);
    return largest;
}
console.log("Find the largest value of the array using max from Math class")
console.log(findLargest([1, 43, 5, 65, 88]));

//Method 2 --> findLargest element from the given array

function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("finding largest value from array using for loop")
console.log(findLargest([12, 4, 65, 100, 2]))

//3. Return the count of even and odd numbers
function getCountEvenAndOddNums(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

    }
    return "Odd counts: " + oddCount + "\n" + " Even counts: " + evenCount;
}
console.log(getCountEvenAndOddNums([12, 2, 2, 24, 3, 4, 5, 3, 2, 1, 2, 3, 4, 6, 3, 23, 22]));

//4. Find the middle element of the given array if arr.length even return the average else 
//return the middle elements of the array.

function getMiddleElement(arr) {
    let middleIndex;
    for (let i = 0; i < arr.length; i++) { // we can avoid the for loop, it works with if statement
        if (arr.length % 2 === 0) {
            middleIndex = arr.length / 2;
            return (arr[middleIndex] + (arr[middleIndex - 1]));
        } else {
            middleIndex = (arr.length - 1) / 2;
            return arr[middleIndex];
        }
    }
}
console.log(getMiddleElement([12, 4, 5, 6, 4]));
console.log(getMiddleElement([1, 2, 3, 4, 5]));

//5.