console.log("Hello Word learn Hoi Dan IT")

const http = require('http');//node JS

const hostname = '127.0.0.1';//localhost
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\nHoi Dan IT');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
