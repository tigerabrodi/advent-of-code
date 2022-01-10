// @ts-check
const fs = require("fs");

const content = fs.readFileSync("./input-4.txt", "utf-8");

const passports = content.split("\n");

let currentPassport = {};
let countValidPassports = 0;

for (const passport of passports) {
  if (passport === "") {
    if (isValidPassport(currentPassport)) {
      countValidPassports++;
    }

    currentPassport = {};
  }

  const regex = /(byr|iyr|eyr|hgt|hcl|ecl|pid|cid):(\S+)/g;
  let match;
  while ((match = regex.exec(passport))) {
    const [_, key, value] = match;
    currentPassport[key] = value;
  }
}

function isValidPassport(passport) {
  return (
    "byr" in passport &&
    "iyr" in passport &&
    "eyr" in passport &&
    "hgt" in passport &&
    "hcl" in passport &&
    "ecl" in passport &&
    "pid" in passport
  );
}

console.log({ countValidPassports });
