const {input} = require('./day1-input.js')

const sortedInput = input.sort((a,b) => a-b);
let result;


for (let i = 0; i<sortedInput.length; i++) {
  const remainder = 2020 - sortedInput[i];
  if (sortedInput.includes(remainder, i + 1)) {
    result = sortedInput[i] * remainder;
  }
};

console.log('Result', result);
