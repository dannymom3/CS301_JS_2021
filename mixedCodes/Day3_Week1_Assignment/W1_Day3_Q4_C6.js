
const prompt = require('prompt-sync')();


let cost = parseFloat(prompt("Please enter cost of the house "));
let down_pay;

if(cost < 50000){
    down_pay = 0.05 * cost;
}else if(cost < 100000){
    down_pay = 2000 + 0.1 * (cost - 50000);
}else if(cost < 200000){
    down_pay = 7500 + 0.2 * (cost - 100000);
} else{
    down_pay = 27500 + 0.25 * (cost - 200000);
}

console.log(down_pay);


/** Defining Table:
 * 
Input: Get the cost of the house from the user.

Process: Calculate the down payment based on the bank schedule.

output: Display the down payment to the users.
 
 */