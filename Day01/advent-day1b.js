const {input} = require('./day1-input.js')

input.sort((a,b) => a-b);

let result;
const sumTwoSmallest = input[0] + input[1];
const abbrInput = input.filter((num) => num + sumTwoSmallest < 2020);

for (let i=0; i<abbrInput.length-2; i++) {
  for (let j=1; j<abbrInput.length-1; j++) {
    for(let k=2; k<abbrInput.length; k++) {
      if (abbrInput[i] + abbrInput[j] + abbrInput[k] === 2020) {
        result = abbrInput[i] * abbrInput[j] * abbrInput[k];
        break;
      }
    }
  }
}

console.log(result);
