"use strict";

function guess() {
    let num = Number(document.getElementById("in").value);
    alert(isPrime(num));
    //      let guess=4;

    //        if(num===guess){
    //            alert("bingo");
    //        }else{
    //            cleanIt();
    //        }
}

function allNums(arr) {
    let st = arr.split(",");

    for (let index = 0; index < arr.length; index++) {


    }
}

function isPrime(n) {

    let count = 0;
    for (let index = 2; index < n - 1; index++) {
        if (n % index === 0) {
            return false;
        }

    }
    return true;
}

//  function cleanIt(){
//     document.getElementById("in").value="try again";
//     guess();
//  }