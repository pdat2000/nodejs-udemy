const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subfoder/first.txt", "utf-8");
const second = readFileSync("./content/subfoder/second.txt", "utf-8");

writeFileSync(
  "./content/subfoder/result-sync.txt",
  `Here is ${first} ${second}`,
  {
    flag: "a",
  }
);
