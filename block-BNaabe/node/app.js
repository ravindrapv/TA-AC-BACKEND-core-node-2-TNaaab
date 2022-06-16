const http = require('http');

const qs = require('querystring');

var server = http.createServer(handeleRequest);

function handeleRequest(req,res){
 var store = '';
  console.log(req.headers,['Content-Type']);
 req.on('data', (chunk) => {
     store += chunk;
 })
 req.on('end', () => {
   if(req.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
       var formData = qs.parse(store);
       res.end(JSON.stringify(formData));
   }
   if(req.headers['Content-Type'] === 'application/json'){
    res.end(store);
   }
 })
}


server.listen(4000, () => {
    console.log('server is listing on port 4k');
})