// @ts-check
const fs = require("fs");

const content = fs
  .readFileSync("./input-1.txt", "utf-8")
  .split("\n")
  .map((number) => Number(number));

const set = new Set(content);
for (const number of content) {
  const theOtherNumber = 2020 - number;
  if (set.has(theOtherNumber)) {
    console.log(number * theOtherNumber);
    break;
  }
}
