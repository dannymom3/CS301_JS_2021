"use strict";

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {Array} arr array input
 * @return {Array} returns non duplicate array elements
 */
function removeDup(arr) {
    let nonDup = [];
    let repeted = [];
    for (let i = 0; i < arr.length; i++) {
        if (nonDup.indexOf(arr[i]) === -1) {
            nonDup.push(arr[i]);
        } else {
            if (repeted.indexOf(arr[i]) === -1) {
                repeted.push(arr[i]);
            }
        }
    }
    //return non_dup;
    return repeted;
    //return non_dup;
}

console.log(removeDup([2, 3, 2, 4, 4, 6, 2020]));
//console.log(removeDup([2, 3, 2, 4, 4, 6, 2020]))