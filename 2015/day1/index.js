import fs from 'fs';

// part one

const steps = fs.readFileSync("./input.txt", "utf-8").trim().split("");
const upstairs = steps.filter(el => el=="(");
const downstairs = steps.filter(el => el == ")");

const floorAt = Math.abs(upstairs.length - downstairs.length);
console.log(floorAt);

// part two

let floor = 0;
let basement = [];
steps.forEach((step, i) => {
    if(step == "("){
        floor++;
    } else {
        floor--;
    }

    if(floor == -1) {
        basement.push(i+1);
        return;
    }
})

console.log(basement[0]);

