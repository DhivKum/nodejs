const http = require('http');

const server = http.createServer ((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(<h1>'Hello, World!'</h1>);
    res.end();
});

const port = 3000; 
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
