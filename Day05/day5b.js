const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");

const totalRows = 127;
const totalSeats = 7;
let seatIds = [];

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
  seatIds.push(seatId);
}

const sortedSeatIds = seatIds.sort((a,b) => a-b);
for (let n = 1; n < (sortedSeatIds.length - 1); n++) {
  if (sortedSeatIds[n] !== sortedSeatIds[n+1] - 1) {
    console.log('Seat ID is', sortedSeatIds[n+1]);
  }
}
