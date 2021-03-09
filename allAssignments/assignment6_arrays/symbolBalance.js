"use strict";

/*
Given an expression array exp, write a program to examine whether the pairs and the orders of
“{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
 Example:
          Input: exp = ["(", ")", "[", "{", "}", "]"] 
          Output: Balanced

          Input: exp = ["[", "(", "]", ")"] 
          Output: Not Balanced
------------------------------------------------------------------------------------------------

*/
/**
 * @siince Feb / 2021
 * @author Danile Haile
 * @param {Array} expr expression of array
 * @return {boolean} returns true if the array experession is balanced, otherwise false if the 
 * expression of the array is not balanced
 */
function isBalanced(expr) {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
        // if opening braces push
        if (expr[i] == "(" || expr[i] == "[" || expr[i] == "{") {
            stack.push(expr[i]);
            continue;
        }

        // if it a closing brace and nothing to match with it's not balanced.
        if (stack.length === 0) return false;

        let opn = stack.pop();

        // if opening and closing pairs not matching it's not balanced.
        switch (expr[i]) {
            case ")":
                if (opn === "{" || opn === "[") return false;
                break;
            case "}":
                if (opn === "(" || opn === "[") return false;
                break;
            case "]":
                if (opn === "(" || opn === "{") return false;
                break;
        }
    }

    // if there are extra closing brackets not balanced.
    return (stack.length === 0);
}

console.log(isBalanced(["{", "(", ")", "}", "{", "}", "]"]))