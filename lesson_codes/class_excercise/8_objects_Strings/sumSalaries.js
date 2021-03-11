"use strict";

function sumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
let empSalary = {
    Daniel: 1000,
    Ann: 160,
    pete: 130,
};
//TODO -- Average salary ???
console.log(sumSalaries(empSalary));