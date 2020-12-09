const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
input.push(''); // Add empty line to end.

let sumCounts = 0;
let uniqueQs = new Set();

for (let line of input) {
  if (line === '') {
    sumCounts += uniqueQs.size;
    uniqueQs = new Set();
  }
  for (let question of line.split('')) {
    uniqueQs.add(question)
  }
}

console.log(sumCounts);
