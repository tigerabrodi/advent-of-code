// @ts-check
const fs = require("fs");

const content = fs.readFileSync("./input-2.txt", "utf-8");

const matches = content.split("\n").map((fullString) => {
  const [match, pos1, pos2, character, password] = fullString.match(
    /^(\d+)-(\d+) (\S): (\S+)$/
  );

  return (
    (password[Number(pos1) - 1] === character) ^
    (password[Number(pos2) - 1] === character)
  );
});

let count = 0;
for (const match of matches) {
  if (match) {
    count++;
  }
}

console.log(count);
