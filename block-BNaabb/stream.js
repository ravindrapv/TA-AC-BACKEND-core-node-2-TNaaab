const http = require('http');


const server = http.createServer(handleRequest);


function handleRequest(req,res){
    res.end("this is the response from the web page");
}


server.listen(3456, () => {
    console.log("this is listen on the port of 3456");
});