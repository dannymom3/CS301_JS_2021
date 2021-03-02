"use strict";

function countVouls(str){
    let vouls = "aoeui";
    let l_str = str.toLowerCase();
    let count = 0;

    for(let i = 0; i<l_str.length; i++){
        if(vouls.indexOf(l_str[i]) !== -1){
            count++;
        }
    }
return count;

}

console.log(countVouls(str))