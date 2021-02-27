
//primre number can only divide evenly by itself or one except number 2
//e.g. 11 / 2 = 2.5 is a prime number 

const prompt =require("prompt-sync")();
let user_input = prompt("Please enter an integer: ");
user_input = parseInt(user_input);
function isPrime(value) {
    
    
   if (value < 2){
       return false;
    }
   //using modulus %
   for (let i = 2; i < value; i++){
       if (value % i === 0){
           return false;
        }
    }

   return true;
}
console.log(isPrime(user_input));

