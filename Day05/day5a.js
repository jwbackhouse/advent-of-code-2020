const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");

const totalRows = 127;
const totalSeats = 7;
let highestSeatId = 0;

const narrowItDown = (ticket, lowerLetter, startIdx, endIdx, max) => {
  let answer = 0;
  let limit = max;
  let diff = max;
  for (let i = startIdx; i < endIdx; i++) {
    ticket[i] === lowerLetter ? limit -= Math.floor(diff / 2) : answer += Math.ceil(diff / 2);
    diff = limit - answer;
  }
  return answer
}

for (let ticket of input) {
  const row = narrowItDown(ticket, 'F', 0, 7, totalRows);
  const seat = narrowItDown(ticket, 'L', 7, 10, totalSeats);
  const seatId = row * 8 + seat;
  if (seatId > highestSeatId) highestSeatId = seatId
}

console.log(highestSeatId);
