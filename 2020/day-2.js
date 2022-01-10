// @ts-check
const fs = require("fs");

const content = fs.readFileSync("./input-2.txt", "utf-8");

const matches = content.split("\n").map((fullString) => {
  const [match, firstNumber, secondNumber, character, password] =
    fullString.match(/^(\d+)-(\d+) (\S): (\S+)$/);

  const numOfCharacters = password
    .split("")
    .filter((char) => char === character).length;

  return (
    numOfCharacters >= Number(firstNumber) &&
    numOfCharacters <= Number(secondNumber)
  );
});

let count = 0;
for (const match of matches) {
  if (match) {
    count++;
  }
}

console.log(count);
