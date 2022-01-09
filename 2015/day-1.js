// @ts-check
const fs = require("fs");

const content = fs.readFileSync("./input-1.txt", "utf-8").split("");

let floor = 0;
let position = 1;

for (let i = 0; i < content.length; i++) {
  if (content[i] === "(") {
    floor++;
  } else {
    floor--;
  }

  if (floor === -1) {
    break;
  }

  position++;
}
