function filter_arr(arr){
    let odd_arr = [];
    let j=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            odd_arr[j] = arr[i];
            j++
        }
    }
    return odd_arr
}

let arr1 = [1,2,3,4,5,6,11,13,10];
console.log(filter_arr(arr1))