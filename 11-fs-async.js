const { readFile, writeFile } = require("fs");

readFile("./content/subfoder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile("./content/subfoder/three.txt", "message noi dung", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
