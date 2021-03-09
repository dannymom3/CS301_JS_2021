//Return duplicated and non duplicated values in the array.
function removeDup(arr) {
    let non_dup = [];
    let repeated = [];
    for (let i = 0; i < arr.length; i++) {
        if (non_dup.indexOf(arr[i]) === -1) {
            non_dup.push(arr[i])
        } else {
            if (repeated.indexOf(arr[i]) === -1) {
                repeated.push(arr[i])
            }
        }
    }
    //return non_dup;
    return repeated
}

console.log(removeDup([2, 3, 2, 4, 4, 6, 2020]))



function findMostFrequent(arr) {
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
console.log(findMostFrequent(['a', 'a', 'a', 2, "a", 3, 'a', 3, 'a', 2, 4, 9, 3])) //Result... a:6 times