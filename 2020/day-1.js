// @ts-check
const fs = require("fs");

const content = fs
  .readFileSync("./input-1.txt", "utf-8")
  .split("\n")
  .map((number) => Number(number));

let total;

for (let firstIndex = 0; firstIndex < content.length - 2; firstIndex++) {
  for (let secondIndex = 1; secondIndex < content.length - 1; secondIndex++) {
    for (let thirdIndex = 2; thirdIndex < content.length; thirdIndex++) {
      if (
        content[firstIndex] + content[secondIndex] + content[thirdIndex] ===
        2020
      ) {
        total =
          content[firstIndex] * content[secondIndex] * content[thirdIndex];
        break;
      }
    }
  }
}

console.log({ total });
