//Method 2: Find the second largest number in the given array.
function findSecLargest(arr) {
    let non_repeat_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (non_repeat_arr.indexOf(arr[i]) === -1) {
            non_repeat_arr.push(arr[i]);
        }
    }
    non_repeat_arr.sort((a, b) => b - a);
    return non_repeat_arr[1];
}

let value = [2, 4, 4, 6, 8, 8, 10,10,10];
console.log(findSecLargest(value));

//Method 2: Find the second largest number in the given array.
function secLargest(arr){
    arr.sort((a,b) => b-a);
    for(let i=0; i<arr.length; i++){
      if(arr[i]!==arr[i+1]){
        return arr[i+1];
      }
    }
  }
  
  console.log(secLargest([3,3,6,4,9,24,24,20,24]))