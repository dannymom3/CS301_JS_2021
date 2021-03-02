let x = 5;
let y = 2;
let a = 7;
let b = 3;

function foo(a, b) {
    let x = a + b;
    y = a - b;
    console.log(a, b, x, y);
}

console.log(a, b, x, y) //7352
foo(4, 4); //4480
console.log(a, b, x, y) //7350       why y = 0? because it doesn't declare as let y = a - b; 
    //inside the loop y = 0; and that makes y a new value i.e. 0