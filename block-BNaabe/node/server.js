const { dirname } = require('path');
const path = require('path');

const indexPath = path.join(__dirname, "server.js");

var absalutePath = --dirname;

var relativePath = './index.html';

const http = require('http');

const server = http.createServer(HandleRequest);

function HandleRequest(req,res){
    req.headers['Content-Type']
    res.end("this is the response");
}

server.listen(9000, () => {
    console.log("server listen on port 9k");
})

