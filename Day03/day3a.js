const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
const rowLength = input[0].length;
const across = 3;
const down = 1;
let numTrees = 0;

for (let i = 1; i < input.length; i ++) {
  let x = down * i
  let y = across * i;
  if (y >= rowLength) {
    y = y % rowLength
  }
  if (input[x][y] === '#') {
    numTrees += 1;
  }
}

console.log(numTrees);
