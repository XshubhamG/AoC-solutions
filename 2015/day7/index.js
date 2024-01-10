import fs from 'fs'

const INPUT = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
const COMMAND_REGEX = /[A-Z]+/g;
const  ARGUMENTS_REGEX = /[a-z0-9]+/g;

// our parsed wires in format {wire: value} or {wire: instruction}
const WIRES = new Map();

// Dictionary of our bitwise methods
const BITWISE_METHODS = {
    AND: (a,b) => a & b,
    OR: (a,b) => a | b,
    NOT: (a,b) => -a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a,b) => a >> b,
};


const parseInstruction = instruction => {
    const command = instruction.match(COMMAND_REGEX);
    const args = instruction.match(ARGUMENTS_REGEX);
    const destination = args.pop();
    
    return {
        command: command && command[0],
        agrs: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)),
        destination: destination
    }
}

// calculate value for one of the wires (recursively)
const calculateWire = wireName => {
    const wire = WIRES.get(wireName);

    if(typeof wireName === 'number') return wireName;
    if(typeof wire === 'number') return wire;
    if(typeof wire === 'undefined') return undefined;

    if(!wire.command) {
        WIRES.set(wireName, calculateWire(wire.args[0]));
    } else {
        WIRES.set(wireName, BITWISE_METHODS[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])))
    }

    return WIRES.set(wireName);
}

INPUT.forEach(instruction => {
    const parsedInstruction = parseInstruction(instruction);
    WIRES.set(parsedInstruction.destination, {command: parsedInstruction.command, args: parsedInstruction.args})
});

console.log(WIRES);








