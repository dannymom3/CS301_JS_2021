"use strict";

function find_secondLargest(a, b, c) {
    if (a === b || a === c || b === c) // eliminate problem cases ASAP
        return;
    /*
    eliminating equalities, we are now left with these possibilities:
    a > b > c
    a > c > b
    b > a > c
    b > c > a
    c > a > b
    c > b > a
    */
    if (a > b) {
        // here must be  a > b > c  or  a > c > b  or  c > a > b  
        if (c > a)
            return a; // c > a > b        
        // remaining: a > b > c  or  a > c > b  
        if (b > c)
            return b; // a > b > c
        return c; // a > c > b
    }
    // b > a,  so now must be  b > a > c  or  b > c > a  or  c > b > a
    if (c > b)
        return b; // c > b > a
    // remaining: b > a > c  or  b > c > a 
    if (c > a)
        return c; //  b > c > a
    return a; // b > a > c
}
console.log(find_secondLargest(11, 11, 23));
console.log(find_secondLargest(50, 11, 23));
console.log(find_secondLargest(11, 1, 23));