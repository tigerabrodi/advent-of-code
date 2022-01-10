// @ts-check
const fs = require("fs");

const content = fs
  .readFileSync("./input-1.txt", "utf-8")
  .split("\n")
  .map((number) => Number(number));

outer: for (let i = 0; i < content.length - 2; i++) {
  for (let j = i + 1; j < content.length - 1; j++) {
    for (let k = j + 1; k < content.length; k++) {
      const sum = content[i] + content[j] + content[k];
      if (sum === 2020) {
        console.log(content[i] * content[j] * content[k]);
        break outer;
      }
    }
  }
}
