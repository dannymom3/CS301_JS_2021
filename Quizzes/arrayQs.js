function addends(arr) {
    return arr[0] + arr[arr.length - 1]
}

function getMiddle(arr) {
    let half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[half] + arr[half - 1]) / 2;
    } else {
        return arr[half];
    }
}

function rotateLeft(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = first;
    return arr;
}

function rotateRight(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = last;
    return arr;
}

function rotateNRight(arr, n) {
    let nRotated = arr;
    for (let i = 1; i <= n; i++) {
        nRotated = rotateRight(nRotated);
    }
    return nRotated;
}

function mergeSorted(first, second) {
    let merged = [];
    while (first.length > 0 && second.length > 0) {
        let smaller = first[0] < second[0] ? first : second;
        merged.push(smaller.shift());
    }

    if (first.length > 0) {
        merged.concat(first);
    } else if (second.length > 0) {
        merged.concat(second);
    }
    return merged;
}

console.log(mergeSorted([1, 3, 4, 10, 11], [1, 3, 4]))
module.exports = {
    addends,
    getMiddle,
    rotateLeft,
    rotateRight,
    rotateNRight,
    mergeSorted
}