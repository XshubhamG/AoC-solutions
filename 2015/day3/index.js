import fs from 'fs';

const INPUT = fs.readFileSync('./input.txt', 'utf-8').trim().split("");

// part one
function countHouse(input) {
    const coordinates = new Set().add(`0x0`);
    input.reduce((curCoords, dir) => {
        let newCords = {x: 0, y: 0};
        if (dir === '^') newCords = {x: curCoords.x, y: curCoords.y + 1};
        if (dir === 'v') newCords = {x: curCoords.x, y: curCoords.y - 1};
        if (dir === '>') newCords = {x: curCoords.x + 1, y: curCoords.y};
        if (dir === '<') newCords = {x: curCoords.x - 1, y: curCoords.y};
        coordinates.add(`${newCords.x}x${newCords.y}`);

        return newCords;

    }, {x: 0, y: 0});

    return coordinates;
}

console.log(countHouse(INPUT).size);

// part two
const santaInput = INPUT.filter((_, i) =>  i%2 === 0);
const roboInput = INPUT.filter((_, i) =>  i%2 !== 0);

function countHouseAlternate(input) {
  let visitedCords = ['0x0'];
  let curPos = {x: 0, y: 0};

  input.forEach(dir => {
    if (dir === '^') curPos.y++;
    if (dir === 'v') curPos.y--;
    if (dir === '>') curPos.x++;
    if (dir === '<') curPos.x--;

    visitedCords.push(`${curPos.x}x${curPos.y}`);
  });

  return visitedCords;
};

const result = new Set(countHouseAlternate(santaInput).concat(countHouseAlternate(roboInput))).size;

console.log(result);



