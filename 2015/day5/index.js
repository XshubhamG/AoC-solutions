import fs from 'fs';

const inputStr = fs.readFileSync('./input.txt', 'utf-8').trim().split('\r\n');

// part one
function niceStr(str) {
    const threeVowel = str.match(/a|e|i|o|u/gi);
    let regex1 = /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/gi;
    const letterPair = regex1.test(str);
    let regex2 = /ab|cd|pq|xy/gi;
    const notHaveRestricted = regex2.test(str);

    return threeVowel && threeVowel.length > 2 && letterPair && !notHaveRestricted;
}
const niceStrArr = inputStr.filter(niceStr)
console.log(niceStrArr.length);


// part two
function niceStr2(str) {
    const pairLetter = /([a-z][a-z]).*\1/.test(str);
    const repeatLetter = /([a-z])[a-z]\1/.test(str);

    return pairLetter && repeatLetter;
}
const niceStrArr2 = inputStr.filter(niceStr2);
console.log(niceStrArr2.length);


