const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("content-type", "text/plain");
//   res.write("Hello WOlrd");
//   res.end();
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("content-type", "text/html");
//   res.write("<html><head><title>Node.js HTTP Server</title></head><body>");
//   res.write("<h1>Hello, World!</h1>");
//   res.write("</body></html>");
//   res.end();
// });

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");

  const jsonData = {
    message: "Hello World",
    date: new Date(),
  };

  res.write(JSON.stringify(jsonData));
  res.end();
});

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
