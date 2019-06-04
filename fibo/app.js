const http = require('http');

var port = 80;

function fibo(n) {   
  if (n < 2) {
    return 1;
  }
  return fibo(n - 2) + fibo(n - 1);
}

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end(`${fibo(32)}`);
}).listen(port);
console.log('Server running at http://:'+port);
