const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1> HI!! </h1>");
    res.statusCode = 200;
    res.end;
  } else {
    res.write("<h1>404 not found</h1>");
    res.statusCode = 200;
    res.end;
  }
});

server.listen(8000, () => {
  console.log("server is listening from port 8000");
});
