
const prompt = require('prompt-sync')();


let weather = prompt("Enter the weather ");
let foot_wear;

if(weather === "hot"){
    foot_wear = "sandals"
} else if(weather === "rain"){
    foot_wear = "galoshes"
} else if(weather === "snow"){
    foot_wear = "boots"
} else{
    foot_wear = "shoes"
}

console.log(foot_wear);


/** Defining Table:
  
Input: Input the weather from the user.

Process: If the weather is hot, wear sandals.
         If the weather is rain, wear galoshes.
         If the weather is snow, wear boots.
         otherwise wear shoes.

output: Display the right foot wear for the weather to the users.
 
 */