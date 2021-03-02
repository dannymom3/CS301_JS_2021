"use strict";

const prompt = require("prompt-sync")();

let numOfStudents = +prompt("Enter the number of students of team: ");
let numberOfTeams = +prompt("Enter the number of teams : ");

//This is the default team size
let defaultSize = Math.floor(numOfStudents / numberOfTeams);

//
let extra = numOfStudents % numberOfTeams;

//let teamWithExtraStudents = extra;

let defaultSize = numberOfTeams - extra;

if (extra === 0) {
    console.log(`${numberOfTeams} teams of ${defaultSize}`);
} else {
    console.log(`    ${extra} teams of ${defaultSize + 1} 
    and ${numberOfTeams - extra} teams of ${defaultSize}`);
}