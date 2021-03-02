//Using filter().
let given_arr = [-2,4,3,-4,4,-9,10];

let filtered_arr = given_arr.filter(e => e < 0);
console.log(filtered_arr);

//Using loop.
function return_negative(arr){
    let negative_arr = [];
    let k = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            negative_arr[k] = arr[i];
            k++;
        }
    }
    return negative_arr;
}

console.log(return_negative(given_arr))