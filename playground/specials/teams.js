"use strict";
const prompt = require("prompt-sync")();

let numberOfStudents = +prompt("Enteer number of students: ");

let numberOfTeams = +prompt("Enter number of teams: ");

let initialSize = Math.floor(numberOfStudents / numberOfTeams);

let extra = numberOfStudents % numberOfTeams;

let standardTeamSize = numberOfTeams - extra;

if (extra === 0) {
    console.log(`${standardTeamSize} of teams ${initialSize}`);
} else {
    console.log(`${extra} teams of ${initialSize + 1} 
    and ${standardTeamSize} of teams ${initialSize}`);
}