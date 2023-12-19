import fs from 'fs';

const dimension = fs.readFileSync('./input.txt', "utf-8").trim().split("\n");
const dimensionArr = dimension.map(el => el.split("x"));

// part one
const wrappingPaperArr = dimensionArr.map(dim => {
    const dimNum = dim.map(s => +s);
    dimNum.sort((a,b) => a - b);
    const l = dimNum[0];
    const b = dimNum[1];
    const h = dimNum[2];
    
    return 2*l*b + 2*b*h + 2*h*l + (l*b);
})

const wrappingPaperSum = wrappingPaperArr.reduce((s, v) => s + v);
console.log(wrappingPaperSum);

// part two
const ribbonPaperArr = dimensionArr.map(dim => {
    const dimNum = dim.map(s => +s);
    dimNum.sort((a,b) => a - b);
    const l = dimNum[0];
    const b = dimNum[1];
    const h = dimNum[2];
    
    return 2*(l + b) + l*b*h;
})

const ribbonPaperSum = ribbonPaperArr.reduce((s,v) => s + v);
console.log(ribbonPaperSum);

