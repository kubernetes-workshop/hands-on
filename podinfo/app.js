const http = require('http');
const Client = require('kubernetes-client').Client
const config = require('kubernetes-client').config

var port = 80

http.createServer(function (req, res) {
  client = new Client({ config: config.getInCluster(), version: '1.13' }) // in cluster
  // client = new Client({ config: config.fromKubeconfig(), version: '1.13' }) // use on local machine
  client.api.v1.namespaces.get().then(raw => {
    const namespaces = JSON.stringify(raw, null, 2)
    res.end(namespaces);
  }) 
  res.writeHead(200, {'Content-Type': 'text/plain'});   
}).listen(port);
console.log('Server running at http://localhost:'+port);