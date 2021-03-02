"use strict";
//Call the 
function filterNoVoul(arr) {
  let output = arr.filter(e => returnVouls(e));
  return output;
}
function returnVouls(str) {
  let vouls = "aoeui";
  let l_str = str.toLowerCase();
  let noVoul = true;;
  for (let i = 0; i < l_str.length; i++) {
    if (vouls.indexOf(l_str[i]) !== -1) {
      noVoul = false;
      break;
    }
  }
  if (noVoul)
    return str;
}

let arr = ["civic", "synk", "vow", "rytm"]
console.log(filterNoVoul(arr))