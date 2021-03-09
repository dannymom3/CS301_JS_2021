// 1, write javaScript
// function "isBalanced"
// that accept one argument, an array of two numbers
// if one number of the array is positive and the other is negative
// return true
// else return false
// EXAMPLE: -isBalanced([5, -2]) // return "true"
// isBalanced([-5, 2]) // return "true"
// isBalanced([5, 2]) // return "false"
//TODO
function isBalanced(arr) {
    if (((arr[0] < 0) && (arr[1] > 0)) || ((arr[0] > 0) && (arr[1] < 0)))
        return true
    else
        return false;
}
console.log(isBalanced([5, -2])) // return "true"
console.log(isBalanced([5, 2])) // return "false"


//2,  FInd largest value in the given array

//METHOD 1,
function findLargest(arr) {
    let largest = Math.max(...arr); // spread operator:- It is mostly used in variable array where there is more than 1 values are expected.
    return largest //It allows us the privilege to obtain a list of parameters from an array.
}
console.log(findLargest([34, 56, 123])) // 56

//METHOD 2,
//TODO
function findLargest1(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest
}
console.log(findLargest1([34, 56, 23, 2020, 132])) // 2020



//3,  Return the count of even and odd numbers
//TODO
function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return "even: " + even + ", odd: " + odd
}
console.log(countEvenOdd([3, 4, 6, 8])) // even: 3, odd: 1


//4 FIND THE MIDDLE ELEMENT OF THE GIVEN ARRAY IF ARR.LENGTH EVEN RETURN THE AVERAGE ELSE RETURN THE MIDDLE
function getMiddle(arr) {
    let midIndex;
    if (arr.length % 2 === 0) {
        midIndex = (arr.length) / 2
        return (arr[midIndex - 1] + arr[midIndex]) / 2
    } else {
        midIndex = (arr.length - 1) / 2
        return arr[midIndex]
    }

}
console.log(getMiddle([2, 3, 4, 5, 7, 7, 8, 9])) // 6
console.log(getMiddle([2, 3, 4, 5, 7, 7, 8])) // 5			

//5 ROTATING THE ELEMENT IN THE ARRAY

// GIVEN [2,3,4,5]=>[3,4,5,2]
function rotateLeft(arr) {
    let output = arr.splice(0, 1)[0];
    arr.push(output);
    return arr;

}
console.log(rotateLeft([2, 3, 4, 5, 7, 0, 7])) //Result [3,4,5,7,0,7,2]			

// GIVEN [2,3,4,5]=>[5,2,3,4]
function rotateLeft(arr) {
    let output = arr.splice(arr.length - 1, 1)[0];
    arr.unshift(output);
    return arr;

}
console.log(rotateLeft([2, 3, 4, 5, 7, 0, 7])) //Result [7,2,3,4,5,7,0]				


//6, SORTING NUMBERS AFTER REMOVING DUPLICATE NUMBERS
function removeDupicate(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result.sort((a, b) => a - b)

}
console.log(removeDupicate([1, 2, 3, 3, 3, 4, 55, 5, 6, 4])) //Result [1,2,3,4,5,6,55]

//SORTING RANDOM NUMBERS
function sortRandom(arr) {
    return arr.sort((a, b) => 0.5 - Math.random())
}
console.log(sortRandom([1, 2, 3, 3, 3, 4, 55, 5, 6, 4])) //Result [3,2,1,4,3,4,3,5,6,55]	

//7,  SWAPPING (OVER WRIGHT) THE VARIABLES
let a = 4;
let b = 7;
let c = a;
a = b;
b = c
console.log(a, b) //Result 7,4	

// 8,  FINDING TRUTHY AND FALSY VALUES IN THE GIVEN ARRAY

// a,  COUNTING TRUTHY VALUE IN THE GIVEN ARRAY

function countTruthy(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i])
            count++;
    return count;
}
console.log(countTruthy([0, 1, 3, 4, 5, 5, 6, 0, 0, false, false, ""])) //RESULT 6

//b,  COUNTING falsy VALUE IN THE GIVEN ARRAY

function countFalsy(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (!arr[i])
            count++;
    return count;
}
console.log(countFalsy([0, 1, 3, 4, 5, 5, 0, false, false, "", 0, 0, null, NaN, undefined])) //RESULT 10



//c,  COUNTING truthy and falsy VALUE IN THE GIVEN ARRAY

function countTruthyFalsy(arr) {
    let truthy = 0;
    let falsy = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i])
            truthy++;
        else
            falsy++;
    return "truthy is: " + truthy + ", falsy is: " + falsy;;

}
console.log(countTruthyFalsy([0, 1, 3, 4, 5, 5, 0, false, false, "", 0, 0, null, NaN, undefined])) //RESULT truthy is: 5, falsy is: 10		

//9, FIND THE ABSOLUTE DIFFERENCE BETWEEN TWO NUMBERS
function findDiff(num1, num2) {
    return Math.abs(num1 - num2);
}
console.log(findDiff(-3, 7)) // 10		

//FIND THE ABSOLUTE DIFFERENCE BETWEEN CONSECUTIVE NUMBERS USE MANUAL METHOD(NOT MATH OBJECT METHOD)
function findDiff(arr) {
    let output = [];
    for (let i = 0; i + 1 < arr.length; i++) {
        if (arr[i] - arr[i + 1] < 0) {
            output.push(arr[i + 1] - arr[i])
        } else {
            output.push(arr[i] - arr[i + 1])
        }
    }
    return output
}
console.log(findDiff([1, 2, 4, 3, 7])) // [1,2,1,4]

//10, RETURNING THE INDEX NUMBER IN THE GIVEN ARRAY IF THE NUMBER IS IN THE ARRAY ELSE RETURN NO NUMBER IS FOUND.

function findNumber(arr, num) {
    let index = ""
    if (arr.indexOf(num) == -1)
        return "there is no value"
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            index += arr.indexOf(arr[i], i) + " "
        }
    }
    return index
}
console.log(findNumber([1, 3, 2, 3, 4], 3)) // 1 3

//11, REMOVING DUPLICATE NUMBERS IN THE GIVEN ARRAY

//METHOD 1, 
function removeDup(arr) {
    let b = [];
    for (i = 0; i < arr.length; i++) {
        if (b.indexOf(arr[i]) === -1) {
            b.push(arr[i]);
        }
    }
    return b;
}
console.log(removeDup([2, 2, 23, 3, 3, 3, 3, 8, 9, 4, 4, 4])) //result [2, 23, 3, 8, 9, 4]

function removeDuplicate(arr) {
    arr.sort((a, b) => a - b);
    let nonDuplicate = [arr[0]];
    for (let i = 0; i + 1 < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            nonDuplicate.push(arr[i + 1])
        }
    }
    return nonDuplicate
}
console.log(removeDuplicate([2, 2, 23, 23, 4, 23, 3, 3, 8, 9, 4, 4, 4])) // [2,3,4,8,9,23]

//12, BELLOW TWO CODES DOES THE SAME BUT WRITTEN IN DIFFERENT FORMS

//a,
function findIndex(arr, num) {
    let output;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            output = arr.indexOf(arr[i]);
            break; // if we don't put break our code will execute -1 because the loop keep cheking the values in the array
        } else { // so we have to put break to execute the code as soon as the if condition is true.
            output = -1;
        }
    }
    return output;
}
console.log(findIndex([3, 4, 5, 6, 8], 6)) //Result 3

//b,
function findIndex1(arr, num) {
    let number;
    if (arr.indexOf(num) === -1) {
        number = -1
    } else {
        number = arr.indexOf(num);
    }
    return number;
}
console.log(findIndex1([1, 2, 3, 4], 3)) // Result 2

// 13, EXECUTING SAME RESULT USING MANUAL AND ARRAY METHOD
//    if all values in the array greater than 5 return true else return false

// a,  MANUAL 
function checkCondition(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 5) {
            return false;
        }
    }
    return true;
}
console.log(checkCondition([10, 14, 6, 5, 11])) // result false

//b,  ARRAY METHOD
function checkCondition1(arr) {

    return arr.every(function(e) {
        return e > 5
    })

}
console.log(checkCondition1([10, 14, 6, 51, 11])) // result true

// 14, EXECUTING SAME RESULT USING MANUAL AND ARRAY METHOD
//    if at least one value in the array greater than 5 return true else return false

//a,  MANUAL 
function checkCondition(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            return true;
        }
    }
    return false;
}
console.log(checkCondition([1, 40, , 5, 11])) // result true

//b, ARRAY METHOD
function checkCondition1(arr) {

    return arr.some(function(e) {
        return e > 5
    })
}
console.log(checkCondition1([10, 4, 6, 51, 11])) // result true

// 15, RETURN ALL VALUES GREATER THAN 5

// 		a,  MANUAL 
function findNumber(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) output.push(arr[i])
    }
    return output;
}
console.log(findNumber([11, 4, 55, 1])) // result [11,55]

//b,  ARRAY METHOD
function checkCondition1(arr) {

    return arr.filter(function(e) {
        return e > 5
    })
}
console.log(checkCondition1([1, 41, 1, 12])) // result [41, 12]

//16, COUNTING EVEN AND ODD NUMBERS IN THE GIVEN ARRAY
//"\n" is place space between even and odd
function countEven(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++
        }
    }
    return "even: " + even + "\n" + " odd: " + odd;
}
console.log(countEven([1, 2, 4, 5, 6, 6, 7])) // RESULT 
    // even: 4
    // odd: 3

// 17, MULTIPLYING EACH ELEMENT IN THE ARRAY BY SOME VALUE
//      a,
function multiply(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i] * num;
        result.push(product);
    }
    return result
}
console.log(multiply([3, 4, 5, 3], 5)) //RESULT [15,20,25,15]

//b,
function multiply1(arr, num) {
    let result = arr.map(function(e) {
        return e * num;
    });
    return result;
}
console.log(multiply1([3, 4, 5, 3], 5)) //RESULT [15,20,25,15]

//18, ADD THE VALUE IN THE GIVEN ARRAY. THE VALUE OF JACK, QUEN AND KING EQUALS TO 10
function golfScore(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "jack" || arr[i] === "king" || arr[i] === "quen") {
            arr[i] = 10;
        }
        sum += arr[i]
    }
    return sum;
}
console.log(golfScore([1, 2, "jack", "quen", 3, 4, "king"])) //REsult 40.

// 19, RETURN THE 12 DAYS OF CHRISMAS SONGS. WHEN YOU INSERT 1 IT RETURNS "do", WHEN YOU INSERT 3 IT
//    RETURNS "do", "ro","mi" and WHEN YOU INTER 12 IT RETURNS ALL THE TWELVE DAY MUSICS IN THE GIVEN ARRAY

function chooseMusic(arr, days) {
    for (let i = 0; i < days; i++) {
        console.log(i + 1 + ":" + arr[i]);
    }
}
chooseMusic(["do", "ro", "mi", "fa", "so", "la", "si", "do", "lo", "be", "ya", "2020"], 12) // ANSWER
    // 1: do
    //         2: ro
    //     3: mi
    // 4: fa
    // 5: so
    // 6: la
    // 7: si
    // 8: do
    //         9: lo
    //     10: be
    // 11: ya
    // 12: 2020
    // or

function chooseMusic(arr, days) {

    let chooseDay = arr.splice(0, days);
    return chooseDay
}
console.log(chooseMusic(["do", "ro", "mi", "fa", "so", "la", "si", "do", "lo", "be", "ya", "2020"], 3)) // result ["do"," ro", "mi"]

//20, SORT THE GIVEN ARRAY RANDOMLY

function sortRandom(arr) {
    return arr.sort(function(a, b) {
            return 0.5 - Math.random()
        })
        // return arr;
}
console.log(sortRandom([4, 2, 1, 5, 3])) // result any random number in the array [2,4,1,3,5]

21,
function findIndex(arr) {
    return arr.indexOf(2, 3); // 3 is the index at which the search will begin
}
console.log(findIndex([1, 2, 3, 4, 5, 2, 7])) // result 5

// 22, includes and indexOf
// WHAT THE BOTTOM CODE DOES IS IF THE NUMBER EXIST IN THE ARRAY RETURN TRUE ELSE RETURN FALSE

function findIndex(arr) {
    // using different methods but getting the same result
    console.log(arr.indexOf(5) !== -1)
    console.log(arr.includes(5))
}
findIndex([1, 2, 3, 4, 5, 2, 7]) // RESULT TRUE
    //TRUE

//23, COMBINING DIFFERENT ARRAYS USING SPREAD OPERATORS THREE DOTS (...)
function combined(par, par1, par2) {
    let result = [...par, ...par1, ...par2];
    return result;
}
console.log(combined([1, 2, ], ["skip 4"], [5, 6])) //RESULT [1,2,"skip 4",5,6]

//24, SORTING ASCENDING ORDER
let arr = [5, 1, 2, 3];
arr.sort(function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
})
console.log(arr) // result [1,2,3,5]

// 25, THE FUNCTION TAKES TWO ARRAY THAT'S arr and num.
//    if the numbers in the num array exists in the arr array return the new array not included the numbers in the num array.
//    RETURN THE GIVEN ARRAY WITHOUT NUMBERS IN THE num ARRAY.

// 		METHOD 1, 
function isExist(arr, num) {
    let without = [];
    for (let i = 0; i < arr.length; i++) {
        if (num.indexOf(arr[i]) === -1) {
            without.push(arr[i])
        }
    }
    return without
}
console.log(isExist([2, 3, 3, 5, 6, 3, 7, 9, 5], [3, 5])) // RESULT [2,6,7,9]


//METHOD 2, 
function exclude(arr, num) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (!num.includes(arr[i]))
            output.push(arr[i])
    }
    return output;
}
console.log(exclude([2, 3, 3, 5, 6, 3, 7, 9, 5], [3, 5])) // RESULT[2, 6, 7, 9]

//26, MOVING ELEMENTS OF THE ARRAY ............................................................................................interview

function move(arr, i, shift) {
    let removed = arr.splice(i, 1)[0];
    if (i + shift < 0) {
        arr.splice(0, 0, removed)
        return arr
    }
    arr.splice(i + shift, 0, removed);
    return arr;
}
console.log(move([1, 2, 3, 4, 5, 7, 8, 9, 10, 11], 4, 3)) // result [1,2,3,4,7,8,9,5,10,11]
console.log(move([1, 2, 3, 4, 5, 7, 8, 9, 10, 11], 4, -2)) // result [1,2,5,3,4,7,8,9,10,11]

//27, FINDING THE LARGEST NUMBER IN THE GIVEN ARRAY USING REDUCE METHOD

function getMax(arr) {
    if (arr.length === 0) return "no value"

    let largest = arr.reduce(function(a, b) {
        if (b > a)
            return b;
        return a;
    })
    return largest;
}
console.log(getMax([1, 3, 45, 6])) // Result 45

//28, TO RETURN ONLY THE POSITIVE INTEGER IN THE GIVEN ARRAY WE USE THE isInteger METHOD

//METHOD 1, 
function returnInt(arr) {
    let intege = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            intege.push(arr[i])
        }
    }
    return intege
}
console.log(returnInt([-2, 5.4, 7, 3.3, 4])) // Result [7, 4]


//METHOD 2, 
function returnInt(arr) {
    return arr.filter(function(e) {
        return Number.isInteger(e) && e > 0
            // if we return only Number.isInteger(e) our result will be [-2,7, 4]
    })
}
console.log(returnInt([-2, 5.4, 7, 3.3, 4])) // Result [7, 4]

//29,  We can use rest operator to remove elements from the begining of the array
function removeNumbers(arr) {
    let [, , , ...newArr] = arr;
    return newArr
}
console.log(removeNumbers([1, 2, 3, 4, 5, 6])) // Result [4,5,6]

// 30, We can compare two numbers even those numbers are in string form using parse method
//    Write a JavaScript program that accept two integers in string form and display the larger
function compareTwoNumbers(a, b) {
    if (+a > +b)
        return a
    else if (+a === +b)
        return "both are equal"
    else
        return b
}
console.log(compareTwoNumbers('14', '4')) // Result:- 14 . 		


//31, Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array...................interview


1,
function first(arr, n) {
    let first = [];
    if (n == null)
        return arr[0]
    if (arr.length < n)
        return arr
    for (let i = 0; i < n; i++) {
        first.push(arr[i])
    }
    return first;
};
console.log(first([7, 9, 0, -2])); //... 7
console.log(first([], 3)); //............ []
console.log(first([7, 9, 0, -2], 3)); //.....[7,9,0]
console.log(first([7, 9, 0, -2], 6)); //.....[7,9,0,-2]
console.log(first([7, 9, 0, -2], -3)); //.....[]

//2,
function first(arr, n) {
    let output = [];
    if (n == null) return arr[0];
    for (let i = 0; i < n; i++) {
        if (arr[i] == null) {
            continue;
        } else {
            output.push(arr[i])
        }
    }
    return output
};
console.log(first([7, 9, 0, -2])); //... 7
console.log(first([], 3)); //............ []
console.log(first([7, 9, 0, -2], 3)); //.....[7,9,0]
console.log(first([7, 9, 0, -2], 6)); //.....[7,9,0,-2]
console.log(first([7, 9, 0, -2], -3)); //.....[]


//3,
function first(array, n) {
    if (array == [])
        return [];
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.splice(0, n);

};
console.log(first([7, 9, 0, -2])); //... 7
console.log(first([], 3)); //............ []
console.log(first([7, 9, 0, -2], 3)); //.....[7,9,0]
console.log(first([7, 9, 0, -2], 6)); //.....[7,9,0,-2]
console.log(first([7, 9, 0, -2], -3)); //.....[]	


//32, Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.............interview
//1,
function findLastNumber(array, n) {
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};
console.log(findLastNumber([7, 9, 0, -2])) // Result -2
console.log(findLastNumber([], 3)); //.....[]
console.log(findLastNumber([7, 9, 0, -2], 6)); //....[7,9,0,-2]
console.log(findLastNumber([7, 9, 0, -2], -3)); //....[]


//2,
function findLastNumber(arr, n) {
    let output = [];
    if (n == null)
        return arr[arr.length - 1];
    for (let i = arr.length - n; i < arr.length; i++) {
        if (i < 0) {
            continue;
        } else {
            output.push(arr[i])
        }
    }
    return output;
}
console.log(findLastNumber([7, 9, 0, -2])) // Result -2
console.log(findLastNumber([], 3)) //.....[]
console.log(findLastNumber([7, 9, 0, -2], 6)); //....[7,9,0,-2]
console.log(findLastNumber([7, 9, 0, -2], -3)); //....[]
console.log(findLastNumber([7, 9, 0, -2], 3)); //[9,0,-2]		



//3,
function findLastNumber(arr, n) {
    if (arr.length === 0)
        return [];
    if (arr.length <= n)
        return arr
    if (n == null)
        return arr[arr.length - 1]
    let lastElement = [];
    for (let i = arr.length - 1; i >= arr.length - n; i--) {
        lastElement.push(arr[i])
    }
    return lastElement;
}
console.log(findLastNumber([7, 9, 0, -2])) // Result -2
console.log(findLastNumber([], 3)) //.....[]
console.log(findLastNumber([7, 9, 0, -2], 6)); //....[7,9,0,-2]
console.log(findLastNumber([7, 9, 0, -2], -3)); //....[]
console.log(findLastNumber([7, 9, 0, -2], 3)); //[-2,0,9]		


//4,
function findLastNumber(arr, n) {
    if (n == null)
        return arr[arr.length - 1]
    if (arr.length <= n)
        return arr;

    let removed = arr.slice(arr.length - n);
    return removed;
};
console.log(findLastNumber([7, 9, 0, -2], 3)) // Result -2
console.log(findLastNumber([], 3)) //.....[]
console.log(findLastNumber([7, 9, 0, -2], 6)); //....[7,9,0,-2]
console.log(findLastNumber([7, 9, 0, -2], -3)); //....[]


//33, Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
//1,
function insert_(num) {
    let output = [];
    let value = num.toString(); //....................//since the input parameter is a number, we have to change it to the string
    for (let i = 0; i < value.length; i++) {
        if (value[i] % 2 === 0 && value[i + 1] % 2 === 0) {
            output.push(value[i] + "-")
        } else {
            output.push(value[i])
        }
    }
    return output.join("")
}
console.log(insert_(12346786)) // Result 1234-678-6


//2,
function insert_(num) {
    let output = ""
    let str = String(num)
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
            output += (str[i] + "-")
        } else {
            output += (str[i])
        }
    }
    return output
}
console.log(insert_(12346786)) // Result 1234-678-6


//34, Write a JavaScript program to find the most frequent item of an array. Go to the editor
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )


//METHOD 2, 
function findFrequent(arr) {
    let max = 0
    let letter;
    for (let i = 0; i < arr.length; i++) {
        let count = 0; //let count must define inside for loop to count every index and over wright the max
        //if we wright the let count outside for loop it returns the whole count and execute the last index value with the total count
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                ++count;
            }
        }
        if (count > max) {
            max = count;
            letter = arr[i];
        }
    }

    return letter + ' : ' + max + ' times';
}
console.log(findFrequent(['a', 'a', 'a', 2, "a", 3, 'a', 3, 'a', 2, 4, 9, 3])) //Result... a:6 times		


//FIND THE LEAST FREQUENT VALUE IN THE GIVEN ARRAY.........................................................................................................interview
//TO FIND THIS VALUE WE HAVE TO FIND THE MOST FREQUENT VALUE FIRST.
function findFrequent(arr) {
    let mostFrequent = 0;
    let item;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count > mostFrequent) {
            mostFrequent = count;
            item = arr[i]
        }
    }

    let leastFrequent = mostFrequent;
    let value;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count < leastFrequent) {
            leastFrequent = count;
            value = arr[i]
        }
    }
    return value + ":" + leastFrequent + " times"
}
console.log(findFrequent(["a", 9, 4, 2, 'a', 'a', 2, "a", 3, 'a', 3, 'a', 4, 2, 4, 9, 3])) //Result 9: 2 times													


// 35, Write a JavaScript program to find the sum of squares of a numeric vector
// 	METHOD 1,	
function sumOfSquares(arr) {
    let sum = 0;
    let result = arr.map(function(e) {
        return e ** 2
    })
    for (let i = 0; i < result.length; i++)
        sum += result[i];
    return sum
}
console.log(sumOfSquares([2, 3, 4])) // Result 29

//METHOD 2,
function sumOfSquares1(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let pow = Math.pow(arr[i], 2)
        sum += pow
    }
    return sum;
}
console.log(sumOfSquares1([2, 3, 4])) //Result 29


///Write a JavaScript program to compute the sum and product of an array of integers.
function sumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i]
    }
    return "sum is: " + sum + ", product is: " + product
}
console.log(sumAndProduct([2, 3, 4])) // Result sum is: 9, product is: 24

//36, finds the position of a specified input value within an array sorted by key value.
//Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
//Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4

function binary_search(arr, n) {

    return arr.indexOf(n)
}
console.log(binary_search([1, 2, 3, 4, 5, 7, 8, 9], 5)) // result 4


//Find the index of the number n. 
function findLocation(arr, n) {
    let index = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            index.push(arr.indexOf(arr[i], i))
        }
    }
    return index.join(",")
}
console.log(findLocation([3, 2, 5, 4, 5, 7], 5)) // 2,4			


//37, There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
//Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
//Expected Output :
[4, 5, 8, 10, 12, 13]

//METHOD 1,	
function sumindex(ar1, ar2) {
    let lenght = Math.max(ar1.length, ar2.length);
    let sum = []
    for (let i = 0; i < lenght; i++) {
        sum.push((ar1[i] || 0) + (ar2[i] || 0))
    }
    return sum;
}
console.log(sumindex([1, 2, 3, 1, 2], [5, 6, 7, 9])) // RESULT [6, 8, 10, 10, 2]


//METHOD 2, 
function sumArr(arr1, arr2) {
    let sum = [];
    let length;
    if (arr1.length > arr2.length)
        length = arr1.length
    else
        length = arr2.length;
    for (let i = 0; i < length; i++) {
        if (arr1[i] == null)
            arr1[i] = 0
        if (arr2[i] == null)
            arr2[i] = 0;
        sum.push((arr1[i]) + (arr2[i]))
    }
    return sum;
}
console.log(sumArr([1, 2, 3, 1, 2], [5, 6, 7, 9])) // RESULT [6, 8, 10, 10, 2]

//METHOD 3,   
function sumArrays(arr1, arr2) {
    let arr3 = [];
    let l = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < l; i++) {
        if (arr1[i] == null)
            arr1[i] = 0;
        if (arr2[i] == null)
            arr2[i] = 0;
        arr3.push(arr1[i] + arr2[i])
    }
    return arr3;
}
console.log(sumArrays([1, 2, 3, 1, 2], [5, 6, 7, 9])) // RESULT [6, 8, 10, 10, 2]

//38, Write a JavaScript function to merge two arrays and removes all duplicates elements. Go to the editor

//Test data :
var array1 = [1, 2, 2, 3];
var array2 = [2, 30, 1, 3];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]

function removeDuplicateValue(arr, arr1) {
    let output = [];
    let merge;
    merge = arr.concat(arr1)
    for (let j = 0; j < merge.length; j++) {
        if (output.indexOf(merge[j]) === -1)
            output.push(merge[j])
    }

    return output;
}
console.log(removeDuplicateValue([9, 9, 1, 2, 3, 3, 8], [8, 3, 9, 5])) // RESULT [9, 1, 2, 3, 8, 5]



//39, Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor
//Sample array : 
[NaN, 0, 15, false, -22, '', undefined, 47, null]
//Expected result : 
[15, -22, 47]

function removeElements(arr) {
    var store = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) { //if(arr[i]).....Means only returns truthy values by excluding falsy value
            store.push(arr[i]); //if(!arr[i])....Means only return falsy values
        }
    }
    return store;
}
console.log(removeElements([1, NaN, 0, 15, false, -22, '', undefined, 47, null, NaN])) // RESULT [1, 15, -22, 47]						


//40,  Write js function that returns the sum of numbers less than the given num.
function beya(num) {
    let result = []
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i
        result.push(sum)
    }
    return result
}
console.log(beya(5)) // [0,1,3,6,10]	


//41, Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor.................................................interview

//Test Data :
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)) //89;

// First we have to sort the given array descending order then
// since index startes from 0, the returned value would be n-1

function returnDuplicateValue(arr, n) {

    let newArr = []
    if (arr.length < n)
        return [];

    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1)
            newArr.push(arr[i])
    }

    newArr.sort((a, b) => b - a)
    return newArr[n - 1]
}
console.log(returnDuplicateValue([9, 1, 2, 10, 10, 3, 8], 4)) // RESULT 3



//42, Write a JavaScript function to get a random item from an array.
//since we are finding random numbers in the given array, we will get different value whenever we call the function 

function getRandom(arr) {
    var output = arr[Math.floor(Math.random() * arr.length)];
    return output;
}
console.log(getRandom([43, 56, 23, 89, 88, 90, 99, 652])); //RESULT random number it could be any number in the given array.						


//43,  Write a JavaScript function to move an array element from one position to another. 

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

function replaceValues(arr, index, shift) {
    let removed = arr.splice(index, 1)[0]
    arr.splice(shift, 0, removed)
    return arr
}
console.log(replaceValues([10, 20, 30, 40, 50], 0, 2)) // RESULT [20, 30, 10, 40, 50]						


//44, Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position

//Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]


function count(n1, n2) {
    let output = [];
    for (let i = 0; i < n2; i++) {
        output.push(n1)
        n1++
    }
    return output;
}
console.log(count(-1, 4)) // RESULT [-1,0,1,2]						


//45, Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"


//1,
function longestName(arr) {
    let longest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }

    return longest;
}
console.log(longestName(["Australia", "Germany", "United States of America"])) // United States of America


//2,
function findLongestCountryName(arr) {
    let l = arr.sort(function(a, b) {
        return b.length - a.length
    })
    return l[0];
}
console.log(findLongestCountryName(["Australia", "Germany", "United States of America"])) // RESULT  "United States of America"						


// 46, Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . ...............................CHECK AGAIN
// Each subsequent number is the sum of the previous two.

// 	1,	
function findFibonacci(num) {
    let arr = [0, 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length <= num) {
            arr.push(arr[i] + arr[i + 1])
        }
    }
    return arr
}
console.log(findFibonacci(8)) // [0, 1, 1, 2, 3, 5, 8, 13, 21]




//2,
function fibonacci(num) {
    let sol = [0, 1];
    for (let i = 2; i <= num; i++) {
        sol.push(sol[i - 1] + sol[i - 2]);
    }
    return sol;
}
console.log(fibonacci(8)) // RESULT [0, 1, 1, 2, 3, 5, 8, 13, 21]	


//47, Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. 

function same_last_digit(p, q, r) {
    return (p % 10 === q % 10) ||
        (p % 10 === r % 10) ||
        (q % 10 === r % 10);

}
console.log(same_last_digit(22, 32, 421)); //RESULT true
console.log(same_last_digit(102, 302, 2)); //result true
console.log(same_last_digit(20, 22, 45)); //result false			

//48, Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas
function convertToStr(n1, n2) {
    let result = Math.round(n1 / n2) + ""
    return result.split("")
}
console.log(convertToStr(60, 6)) // ["1", "0"]


//49, Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

//METHOD 1,
function string_copies(str, n) {
    let l = []
    if (n < 0)
        return false;
    else
        for (let i = 1; i <= n; i++) {
            l.push(str);
        }
    return l.join("")

    //return l;
}
console.log(string_copies("abc", 5)); //abcabcabcabcabc
console.log(string_copies("abc", 0));
null
console.log(string_copies("abc", -2)); //false


///50, Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

function findLargest(arr) {
    let l = [];
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[0] > arr[len - 1]) {
            l.push(arr[0])
        } else {
            l.push(arr[len - 1])
        }
    }
    return l
}
console.log(findLargest([3, 14, 5, 6])) //[,6,6,6,6]


//51, Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer which has odd array length.....................interview

function createNewArr(arr1, arr2) {
    let newArr = []
    let middle = (arr1.length - 1) / 2;
    let middle1 = (arr2.length - 1) / 2;
    newArr.push(arr1[middle], arr2[middle1])
    return newArr;
}
console.log(createNewArr([1, 2, 3], [3, 4, 5, 6, 7])) //[2,5]


//52, Write a JavaScript program to create a new array taking the middle elements of  arrays of array which has odd array length...............................interview

//1, only odd array length...........
function findTheMiddle(arr) {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        let j = (arr[i].length - 1) / 2
        output.push(arr[i][j])
    }
    return output
}
console.log(findTheMiddle([
        [1, 2, 3],
        [2, 3, 4],
        [3, 20, 5]
    ])) // [2,3,20]

//2, if arr length is even skip the array.........
function createNewArr(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) {
            continue;
        }
        let middle = (arr[i].length - 1) / 2;
        output.push(arr[i][middle])
    }
    return output;
}
console.log(createNewArr([
        [1, 2, 3],
        [3, 4, 6, 7],
        [2, 2, 9, 4, 3]
    ])) //[2,9]


//53, Write a JavaScript program to add two digits of a given positive integers in the given arr.................................................interview

//METHOD 1,   
function addTwoDigits(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) { //.........or we can use if((arr[i]>9 && arr[i]<100)&& (Number.isInteger(arr[i])))
        if (arr[i] > 9 && arr[i] < 100) {
            if ((Number.isInteger(arr[i]))) {

                sum += arr[i]
            }
        }
    }
    return sum
}
console.log(addTwoDigits([12, 30, 10, 456, 9, 100.2])) //  52


//METHOD 2,   
function addLengthTwo(arr) {
    let sum = 0;
    let l = arr.join(" ").split(" ")
    for (let i = 0; i < l.length; i++) {
        if (l[i].length === 2) {
            sum += parseInt(l[i])
        }
    }
    return sum
}
console.log(addLengthTwo([12, 3, 10, 456, 9, 10.2])) //22


//54, Write a JavaScript to find the longest string from a given array of strings.

//METHOD 1,  
function findLongest1(arr) {
    let newArr = arr.reduce(function(a, b) {
        if (a.length > b.length)
            return a
        else
            return b
    })
    return newArr
}
console.log(findLongest1(["beya", "great beya", "big beya"])) //"great beya"


//METHOD 2,    
function findLongestStr(arr) {
    let value = arr[0];
    let longest = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
            value = arr[i]
        }
    }
    return value;
}
console.log(findLongestStr(["beya", "great beya", "big beya"])) //"great beya"


// 55, Write a JavaScript code to divide a given array of positive integers into two parts...................................................................interview
//    First element goes to first part, second element goes to second part, and third element goes to first part and so on. 
//    Now compute the sum of two parts and store into an array of size two.

function returnNewArray(arr) {
    let sum1 = 0
    let sum2 = 0;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum1 += arr[i]
        } else {
            sum2 += arr[i]
        }
    }
    output.push(sum1, sum2)
    return output
}
console.log(returnNewArray([1, 3, 6, 2, 5, 10])) // [12,15]	


//56, Write a JavaScript program to check whether two arrays of integers of same length are similar or not. ..........................................interview

function check(arr1, arr2) {

    if (arr1.length !== arr2.length)
        return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
console.log(check([1, 2, 3], [1, 2, 3])) //true
console.log(check([1, 4, 3], [1, 2, 3])) //false	


// 57, Write a JavaScript program to find the maximum possible sum and those numbers of some of its k consecutive numbers............................................interview
// 	1, find sum	
function findMaxSum(arr) {
    let sum = arr[0] + arr[1];
    for (let i = 0; i + 1 < arr.length; i++) {
        if ((arr[i] + arr[i + 1]) > sum) {
            sum = arr[i] + arr[i + 1]
        }
    }
    return sum;
}
console.log(findMaxSum([1, 2, 3, 4, 2])) // RESULT 7

//2, find numbers		
function findNumbers(arr) {
    let maxSum = arr[0] + arr[1];
    for (let i = 1; i + 1 < arr.length; i++) {
        if (arr[i] + arr[i + 1] > maxSum) {
            maxSum = arr[i] + arr[i + 1]
        }
    }
    for (let j = 0; j + 1 < arr.length; j++) {
        if (arr[j] + arr[j + 1] === maxSum) {
            console.log("(" + arr[j] + "," + arr[j + 1] + ")")
        }
    }
}
findNumbers([1, 5, 2, 3, 4, 2]) // (5,2)
    // (3,4)


//58, Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers...............................interview
function findMaxSum(arr) {
    let sum = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i + 1 < arr.length; i++) {
        if ((Math.abs(arr[i] - arr[i + 1]) > sum)) {
            sum = Math.abs(arr[i] - arr[i + 1])
        }
    }
    return sum;
}
console.log(findMaxSum([1, 2, 3, 7, 2])) // RESULT 5


//59, Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
function findMaxSum(arr) {
    let sum = Math.abs(arr[0] - arr[1]);
    for (let i = 0; i + 1 < arr.length; i++) {
        if ((Math.abs(arr[i] - arr[i + 1]) > sum)) {
            sum = Math.abs(arr[i] - arr[i + 1])
        }
    }
    return sum;
}
console.log(findMaxSum([1, 2, 3, 7, 2])) // RESULT 5

//60, Write a JavaScript program to find the index of the maximal difference between any two adjacent elements of a given array of integers............interview

function findIndexOfMaxDifference(arr) {
    let ind = []
    let diff = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i + 1 < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) > diff) {
            diff = Math.abs(arr[i] - arr[i + 1]);

        }
    }

    for (let j = 0; j + 1 < arr.length; j++) {
        if (Math.abs(arr[j] - arr[j + 1]) === diff) {
            ind.push(`${j} and ${j+1}`)
        }
    }
    return ind.join(", ");
}
console.log(findIndexOfMaxDifference([6, 1, 7, 5, 2, 8])) // 1 and 2, 4 and 5



//61, Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.........................interview

//METHOD 1,		
function replace(arr, n, rep) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n)
            arr[i] = rep
    }
    return arr
}
console.log(replace([1, 2, 3, 3, 4], 3, 9)) //[1,2,9,9,4]



//METHOD 2,		
function replace(arr, n, rep) {
    let l = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            l.push(rep)
        } else {
            l.push(arr[i])
        }
    }
    return l
}
console.log(replace([1, 2, 3, 3, 4], 3, 9)) //[1,2,9,9,4]



//62, Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.........................interview
function sumTheDifference(arr) {
    let sum = 0;
    for (let i = 0; i + 1 < arr.length; i++) { //.........i<arr.length-1
        let diff = Math.abs(arr[i] - arr[i + 1])
        sum += diff
    }
    return sum
}
console.log(sumTheDifference([-4, 1, 2, 4, 8])) //12

//63, Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers....................interview

//METHOD 1,	
function isTheNumberExist(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) !== -1)
            return true
    }
    return false
}
console.log(isTheNumberExist([15, 2, 3], [5, 6, 2])) //true


//METHOD 2,
function isTheNumberExist(arr, arr1) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr[i])
                return true;
        }
    }
    return false
}
console.log(isTheNumberExist([15, 12, 3], [15, 6, 2])) //true


//64, ADD THE CONSECUTIVE NUMBERS IN THE GIVEN ARRAY...................................................................................................interview

function removeDuplicate(arr) {
    let sum = 0;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        output.push(sum)
    }
    return output
}
console.log(removeDuplicate([9, 1, 2, 3])) // [9,10,12,15]


// 65, FINDING LARGEST NUMBER IN THE GIVEN ARRAY

// METHOD 1,
function getMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        return Math.max(...arr);
    }
}
console.log(getMax([1, 2, 3, 34, 4, 5, 6])) //34

//METHOD 2,
function findLargest1(arr) {
    arr.sort((a, b) => b - a)
    return arr[0];
}
console.log(findLargest1([1, 2, 4, 61, 19, 8, 7])) //61

//METHOD 3,
function findLargest(arr) {
    let output = arr.reduce(function(a, b) {
        return Math.max(a, b)
    })
    return output;
}
console.log(findLargest([24, 2, 4, 6, 21, 8, 7])) //24


// 66, Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.....................................interview

// METHOD 1,
function countEven(arr, n) {
    let even = 0;
    let l;
    if (arr.indexOf(n) !== -1)
        l = arr.indexOf(n)
    else
        l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] % 2 === 0) {
            even++
        }
    }
    return even
}
console.log(countEven([1, 2, 3, 4, 5, 6, 7, 6, 4], 7)) // 3

//METHOD 2,
function countEven(arr, num) {
    let even = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            break;
        }
        if (arr[i] % 2 === 0) {
            even++;
        }
    }
    return even
}
console.log(countEven([2, 3, 4, 5, 6, 8, 6, 4], 8)) // 3


//67, Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence...................interview

function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}
console.log(is_monotonous([5, 4, 2, 1])); //true
console.log(is_monotonous([1, 2, 2, 3])) // false
console.log(is_monotonous([1, 2, 3])) //true		


//68, Write a JavaScript program to find the longest string from a given array.  130587
function findLongest(arr) {
    let longest = arr[0].length;
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
            ans = arr[i]
        }
    }
    return ans;
}

console.log(findLongest(["202", "hfs", "2020", ])) // "2020"				


// 69, Write a JavaScript program to get the largest even number from an array of integers
// if not
// return no even number...................................interview

// METHOD1,
function largestEven(arr) {
    arr.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            return arr[i];
    }
    return "no even number"
}
console.log(largestEven([2, -4, 8, -6])) // 8
console.log(largestEven([21, -41, 81, -61])) // no even number


//METHOD 2,
function largestEven(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
    }
    if (even.length === 0)
        return "no even number"
    let largest = even[0]
    for (let j = 1; j < even.length; j++) {
        if (even[j] > largest) {
            largest = even[j]
        }
    }
    return largest
}
console.log(largestEven([2, -4, 8, -6])) // 8
console.log(largestEven([21, -41, 81, -61])) // no even number																		


//70,
function findIndexOfRoundNumbers(arr) { //.........................................................................................................interview
    let l = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === 0) {
            l.push(arr.indexOf(arr[i], i)) //.........................important concept
        }
    }
    if (l.length > 0)
        return l.join(",")
    else
        return "no round number"
}
console.log(findIndexOfRoundNumbers([10, 3, 10, 3, 40])) //0,2,4


//71, Write a JavaScript program to sort the given array of numbers in the order of decreasing lengths..................................................interview


function sortDescending(arr) {
    let swap;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap

            }
        }
    }
    return arr
}

console.log(sortDescending([5, 3, 6, 9, 5, 8])) // [9,8,6,5,5,3]

// 72, Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.........................................interview
// METHOD 1,
function sorted(arr) {
    let sorted = arr.sort(function(a, b) {
        return (a.length - b.length)
    })
    return sorted
}
console.log(sorted(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])) // ["","a","b","bb","aa","xyz","acd","zzz"]

//METHOD 2(manual method),
function sort_by_string_length(arra) {
    for (var i = 0; i < arra.length; i++) {
        for (var j = i + 1; j < arra.length; j++) {
            if (arra[i].length > arra[j].length) {
                var m = arra[i];
                arra[i] = arra[j];
                arra[j] = m;
            }
        }
    }
    return arra;
}

console.log(sort_by_string_length(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])) // ["","a","b","bb","aa","xyz","acd","zzz"]

//73, Write a JavaScript program to swap two halves of a given array of integers of even length.
function swap(arr) {
    if ((arr.length % 2) !== 0)
        return false
    let l = arr.length / 2;
    let arr1 = arr.slice(0, l);
    let arr2 = arr.slice(l)
    return arr2.concat(arr1)
}
console.log(swap([1, 2, 3, 4, 5, 6])) // [4,5,6,1,2,3]

//74, Write a JavaScript program to swap pairs of adjacent digits of a given array of integer of even length........................interview

function swap(arr) {
    if (arr.length % 2 !== 0)
        return false;
    for (let i = 0; i < arr.length; i += 2) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap
    }
    return arr
}
console.log(swap([1, 2, 3, 4, 5, 6])) // [2,1,4,3,6,5]
console.log(swap([1, 9, 3, 8, ])) // [9,1,8,3]

//75, RETURN NEW ARR CONTAINS NUMBERS ONLY
function isContain(n) {
    let l = []
    for (let i = 0; i < n.length; i++) {
        if ((Number(n[i])) && (n[i] !== true)) {
            l.push(Number(n[i]))
        }
    }
    return l

}
console.log(isContain(["4", "8", "u", true, "3ly"])) // [4,8]

//76, WHILE LOOP...................................................................................................................INTERVIEW

function findIndex(arr, n) {
    let output = [];
    let ind = arr.indexOf(n);
    while (ind !== -1) {
        output.push(ind);
        ind = arr.indexOf(n, ind + 1)
    }
    return output
}
console.log(findIndex([4, 3, 2, 4, 5, 4], 4)) //[0,3,5]

//77, //COUNT EVEN AND ODD INTEGERS IN THE GIVEN ARRAY............................................................................interview
//ONLY INTEGERS CAN BE EVEN OR ODD NUMBERS

//1,
function count(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i]))
            continue;
        if (arr[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return "even: " + even + " odd: " + odd
}
console.log(count([3, 4.6, "yes", 6, 8, -4])) // even: 3, odd: 1


//2,
function count(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            if (arr[i] % 2 === 0) {
                even++
            } else {
                odd++
            }
        }
    }
    return "even: " + even + " odd: " + odd
}
console.log(count([3, 4.6, "yes", 6, 8, -4])) // even: 3, odd: 1

//78, RETURN ONLY INTEGER VALUES
function returnInt(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]))
            output.push(arr[i])
    }
    return output;
}
console.log(returnInt([0, 3, 4.9, 5, 5.5, 7, true, false, false, ""])) //[0,3,5,7]

//79, MOVE ELEMENTS..................................................................................INTERVIEW

function move(array, position1, position2) {
    if (position1 < 0) { position1 = array.length + position1 };
    if (position2 < 0) { position2 = array.length + position2 };
    let removed = array.splice(position1, 1);
    array.splice(position2, 0, removed[0]);
    return array;
}
console.log(move([10, 20, 30, 40, 50], 0, 2)); //[20,30,10,40,50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); //[10,20,30,50,40]

//80,
//  camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';

//Answer: 1,
function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


//OR 2,
function camelize(str) {
    let arr = str.split('-');
    let maped = arr.map(function(word, index) {
        if (index === 0) {
            return word
        } else {
            return (word[0].toUpperCase() + word.slice(1))
        }
    })
    return maped.join('')
}

console.log(camelize("-webkit-transition"))


// 81, The
// function should only modify the array.It should not
// return anything.
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]		

//Ansewr: - 
function filterRange(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > 7) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr
}

console.log(filterRange([6, 4, 3, 7, 5, 8], 4, 7)) // [6,4,7,5]		

// 82, We have an array of strings arr.We’ d like to have a sorted copy of it, but keep arr unmodified.

// Answer: - 
function filterRange(arr) {
    let copied = arr.slice();
    console.log(copied.sort())
    console.log(arr);
}

filterRange([6, 4, 3, 7, 5, 8]) // [6,4,3,7,5,8]
    // [3,4,5,6,7,8]


//83. check the leap year
function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

console.log(leap_year_range(2000, 2012));