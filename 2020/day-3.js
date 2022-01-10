// @ts-check
const fs = require("fs");

const content = fs.readFileSync("./input-3.txt", "utf-8");

const map = content.split("\n").map((line) => line.split(""));

let bottom = map.length;

function countTreesEncountered(slopeX, slopeY) {
  let y = 0;
  let x = 0;
  let countTrees = 0;

  while (true) {
    x += slopeX;
    y += slopeY;

    if (y >= bottom) {
      break;
    }

    if (map[y][x % map[y].length] === "#") {
      countTrees++;
    }
  }

  return countTrees;
}

console.log(
  countTreesEncountered(1, 1) *
    countTreesEncountered(3, 1) *
    countTreesEncountered(5, 1) *
    countTreesEncountered(7, 1) *
    countTreesEncountered(1, 2)
);
