const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
const rowLength = input[0].length;
let numTrees = 0;

for (let i = 1; i < input.length; i++) {
  let j = i * 3;;
  if (j >= rowLength) {
    j = j % rowLength
  }
  if (input[i][j] === '#') {
    numTrees += 1;
  }
}

console.log(numTrees);
