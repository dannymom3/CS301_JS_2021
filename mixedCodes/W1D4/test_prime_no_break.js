let n = -11;
let count = 0;
for(let i = 2; i<n; i++){
  if(n % i === 0){
    count++;
  }
  
}
if(count === 0 && n>1)
console.log(n+" is prime");
else
console.log(n+" is not prime");