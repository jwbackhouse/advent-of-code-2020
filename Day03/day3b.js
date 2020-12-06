const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
const rowLength = input[0].length;
const acrossArr = [1, 3, 5, 7, 1];
const downArr = [1, 1, 1, 1, 2];
let result = 1;

for (let i = 0; i < acrossArr.length; i++) {
  let numTrees = 0;
  let down = downArr[i];
  let across = acrossArr[i];

  for (let i = 1; i < (input.length / down); i++) {
    let x = down * i
    let y = across * i;

    if (y >= rowLength) {
      y = y % rowLength
    }
    if (input[x][y] === '#') {
      numTrees += 1;
    }
  }
  result *= numTrees;
}

console.log(result);
