"use strict";

let arr = [1, 2, 3, 4, 8, 2, 5];

// arr.sort();
// console.log(arr);
// console.log(arr);

arr.sort(comparator);

console.log(arr);

/*NB: - Try to return without the duplicate elements
      - decending order
*/
//--------------------------------------------------------------------
//Arrow function
let arr1 = [1, 2, 3, 4, 8, 6, 2, 5];
arr.sort((num1, num2) => (num1 - num2); console.log(arr);

        //--------------------------------------------------------------------
        function comparator(num1, num2) {
            if (num1 === num2) {
                return 0;
            } else if (num1 > num2) {
                return 1;
            } else {
                return -1;
            }


        }
        //--------------------------------------------------------------------







        //--------------------------------------------------------------------

        //Anonymous function
        let comparator = function(num1, num2) {
            if (num1 === num2) {
                return 0;
            } else if (num1 > num2) {
                return 1;
            } else {
                return -1;
            }
        }