const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to page");
  }
  if (req.url === "/about") {
    res.end("welcome to about");
  }
});

server.listen(5000);
