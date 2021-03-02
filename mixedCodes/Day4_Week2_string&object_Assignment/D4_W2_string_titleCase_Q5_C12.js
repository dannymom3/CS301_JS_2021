"use strict";

function titleCase(s) {
    let arr = s.split(" ");
    let title_case = "";

    for (let i = 0; i < arr.length; i++) {
        let first_letter = arr[i][0].toUpperCase();
        let sub_letter = arr[i].substring(1).toLowerCase();
        title_case += first_letter + sub_letter + " "
    }

    return title_case;
}

console.log(titleCase(s))