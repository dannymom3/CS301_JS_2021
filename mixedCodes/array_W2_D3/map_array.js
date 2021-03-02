
//Uses loop for mapping
function maping(arr){
    let new_arr = []
    for(let i=0; i<arr.length; i++){
        new_arr[i] = arr[i].length;
    }
    return new_arr;
}

let arr_values = ["apple", "ball", "cat"];
console.log(maping(arr_values));

//Use the map() method
let mapped_arr = arr_values.map(n => n.length);
console.log(mapped_arr);

