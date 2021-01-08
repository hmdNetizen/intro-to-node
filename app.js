const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/contact") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(5000);

console.log("Server listning on port 5000");
