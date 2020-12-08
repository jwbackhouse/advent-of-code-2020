const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split("\n");
let passport = [];
let passports = [];
let numValid = 0;

for (let line of input) {
  if (line === '') {
    if (passport.length < 7) {
      passport = [];
      continue;
    }
    const passportObj = passport.reduce((prev, curr) => {
      const key = curr.slice(0,3);
      const value = curr.slice(4);
      return {
        ...prev,
        [key]: value
      }
    }, {})
    passports.push(passportObj);
    passport = [];
  }
  else {
    passport = passport.concat(line.split(' '));
  }

}

for (let passport of passports) {
  const numProperties = Object.keys(passport).length;
  if ((numProperties === 7 && !passport.cid) || numProperties === 8) {
    numValid += 1;
    // console.log(passport, numValid)
  }
}

console.log(numValid);
