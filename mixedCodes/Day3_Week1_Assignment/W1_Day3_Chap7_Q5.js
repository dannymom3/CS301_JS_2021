
const prompt = require('prompt-sync')();


let age = parseInt(prompt("Please enter age ", 0));
let season = prompt("Enter the season ");
let bed_time;

if(age < 6){
    if(season === "summer" || season === "fall"){
        bed_time = "8:30 p.m."
    } else if(season === "winter" || season === "spring"){
        bed_time = "8:00 p.m."
    }
} else if(age < 13){
    if(season === "summer"){
        bed_time = "9:30 p.m."
    }else if(season === "winter" || season === "fall" || season === "spring"){
        bed_time = "8:30 p.m."
    }

} else{
    if(season === "summer"){
        bed_time = "10:30 p.m."
    }else if(season === "winter" || season === "fall" || season === "spring"){
        bed_time = "9:30 p.m."
    }
}

console.log(bed_time);


/* Defining Table:
  
Input: Get the child's age and the season from the user.

Process: Determine what time the child should go to bed using the child's age and season.

output: Out put the child's bed time.
 
 */

