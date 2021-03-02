//Finding the average values in the given array
function findAverage(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length;

    return average;
}

let score = [20,40,10,50]
let average = findAverage(score);
console.log(average);


//Create array with random number and use it as an input .

let arr_new = [];
for(let i=0; i<10; i++){
    arr_new[i] = Math.floor(Math.random() * 10);
}

average = findAverage(arr_new)
console.log(average)
