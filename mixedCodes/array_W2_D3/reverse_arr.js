// Method 1: Reverse the given array itself
function reverse1(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;

        i++;
        j--
    }
    return arr;
}

let value = [3, 4, 6, 9, 10, 20]
console.log(reverse1(value))

//Method 2: Return new reversed arr
function reverse(arr){
    let new_arr = [];
    let j = 0;
    for(let i = arr.length-1; i>=0; i--){
        new_arr[j] = arr[i];
        j++
    }
    return new_arr;
}

let value = [3, 4, 6, 9, 10, 20]
console.log(reverse(value))