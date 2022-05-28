var http = require('http');
var fs = require('fs');
var server = http.createServer(handelRequest);

function handelRequest(req,res){
res.setHeader('Content-Type', 'text/plain');
  fs.ReadStream('./readme.txt').pipe(res);
}

server.listen(3000, () => {
    console.log('server is on port 3000');
})