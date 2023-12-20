import fs from 'fs';

const INPUT = fs.readFileSync('./input.txt', 'utf-8').trim().split("");

// const INPUT = "^v".split("");

// part one

function countHouse(input) {
    const coordinates = new Set().add(`0x0`);
    input.reduce((curCoords, direction) => {
        let newCoords = {x: 0, y: 0};
        if (direction === '^') newCoords = {x: curCoords.x, y: curCoords.y + 1};
        if (direction === 'v') newCoords = {x: curCoords.x, y: curCoords.y - 1};
        if (direction === '>') newCoords = {x: curCoords.x + 1, y: curCoords.y};
        if (direction === '<') newCoords = {x: curCoords.x - 1, y: curCoords.y};
        coordinates.add(`${newCoords.x}x${newCoords.y}`);

        return newCoords;

    }, {x: 0, y: 0});

    return coordinates;
}

console.log(countHouse(INPUT).size);

// part two
const santaInput = INPUT.filter((_, i) =>  i%2 === 0);
const roboInput = INPUT.filter((_, i) =>  i%2 !== 0);

function traverse(input) {
  let visitedCords = ['0x0'];
  let curPos = {x: 0, y: 0};

  input.forEach(direction => {
    if (direction === '^') curPos.y++;
    if (direction === 'v') curPos.y--;
    if (direction === '>') curPos.x++;
    if (direction === '<') curPos.x--;

    visitedCords.push(`${curPos.x}x${curPos.y}`);
  });

  return visitedCords;
};

const result = new Set(traverse(santaInput).concat(traverse(roboInput))).size;

console.log(result);



