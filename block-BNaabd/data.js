var http = require('http');
var qs = require('querystring');

var server = http.createServer(HandleRequest);


function HandleRequest(req,res) {
    var store = "";
    var dataFormate = req.headers['content-type'];
    req.on('data',(chunk => {
        store = store + chunk;
    }));
    res.on('end',() => {
        if(dataFormate === 'application/json'){
            var parsedData = JSON.parse(store);
            res.end(store);
        }

        if(dataFormate === 'application/x-www-form-urlencoded'){
            var parsedData = qs.parse(store);
            res.end(JSON.stringify(parsedData));
        }
    })
}

server.listen(7000, () =>{
    console.log("server listen on port 7k");
})