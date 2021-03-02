const prompt = require("prompt-sync")();

let message = "I'm thinking of a number between 1 and 100.\n"+
              "Try to guess it!\n"+
              "Please enter an integer between 1 and 100. ";
let answer = 20;
let guess;
let count = 0;
do {
    guess = parseInt(prompt(message));
    if(guess < answer){
        message = guess + " is to low please enter another number. ";
    } else if(guess > answer){
        message = guess + " is to high please enter another number. "
    }

    count++;

} while(guess !== answer)
message = guess + " is correct. The number of guess is " + count;

console.log(message);