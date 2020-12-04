const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
let numValid = 0;

for (entry of input) {
  const components = entry.split(' ');
  const range = components[0];
  const pos1 = +range.split('-')[0] - 1;
  const pos2 = +range.split('-')[1] - 1;
  const letter = components[1][0];
  const password = components[2].split('');

  const checkPos1 = password[pos1] === letter ? 1 : 0;
  const checkPos2 = password[pos2] === letter ? 1 : 0;
  if (checkPos1 + checkPos2 === 1) numValid += 1;
};

console.log(numValid);
