import crypto from 'crypto';
const INPUT = "ckczppom";

const md5 = data => crypto.createHash('md5').update(data).digest('hex');

// track zeros in the start
function startsWith(data, zeros, n) {
   return data.slice(0, n) === zeros;
}

// Part One
let count1 = 0;
while (!startsWith(md5(`${INPUT}${count1}`), '00000', 5)) count1++;
console.log(count1);

// Part Two
let count2 = 0;
while (!startsWith(md5(`${INPUT}${count2}`), '000000', 6)) count2++;
console.log(count2);
