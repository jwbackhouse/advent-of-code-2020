const fs = require('fs');

const input = fs.readFileSync('./input-test.txt').toString().split("\n");
input.push(''); // Add empty line to end.

let sumCounts = 0;
let answers = [];
let teamSize = 0;

for (let line of input) {
  if (line === '') {
    // Get nunber of correct responses for each question
    let countAnswers = {}
    answers.forEach(answer => {
      countAnswers[answer] = (countAnswers[answer] || 0) + 1;
    })

    // Check if number of responses === number of people in the group
    for (let answer in countAnswers) {
      if (countAnswers[answer] === teamSize) {
        sumCounts += 1
      }
    }
    teamSize = 0;
    answers = [];
    continue;
  }
  for (let question of line){
    answers.push(question);
  }
  teamSize += 1;
}

console.log(sumCounts);
