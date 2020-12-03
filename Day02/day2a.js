const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
let numValid = 0;

for (entry of input) {
  const components = entry.split(' ');
  const range = components[0];
  const min = range.split('-')[0];
  const max = range.split('-')[1];
  const letter = components[1][0];
  const password = components[2].split('');

  const letterAppearances = password.filter(n => n===letter);
  const letterCount = letterAppearances.length;
  if (letterCount <= max && letterCount >= min) numValid += 1;
};

console.log(numValid);
