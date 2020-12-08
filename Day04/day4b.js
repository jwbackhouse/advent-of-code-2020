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
    const isValidByr = passport.byr >= 1920 && passport.byr <= 2002;
    const isValidIyr = passport.iyr >= 2010 && passport.iyr <= 2020;
    const isValidEyr = passport.eyr >= 2020 && passport.eyr <= 2030;

    let isValidHgt = false;
    const hgtValue = passport.hgt.slice(0, -2);
    const hgtUnit = passport.hgt.slice(-2);
    if (hgtUnit === 'cm') {
      if (hgtValue >= 150 && hgtValue <= 193) isValidHgt = true; 
    } else if (hgtUnit === 'in') {
      if (hgtValue >= 59 && hgtValue <= 76) isValidHgt = true; 
    }
    
    const isValidHcl = !!passport.hcl.match(/\#[0-9a-f]{6}/);
    const isValidEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport.ecl);
    const isValidPid = passport.pid.length === 9
    
    if (
      isValidByr && isValidIyr && isValidEyr &&
      isValidHgt && isValidHcl && isValidPid &&
      isValidEcl
    ) {
      numValid += 1;
    }
  } 
}

console.log(numValid);
