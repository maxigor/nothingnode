var http = require('http');

var server = http.createServer(function(request,response){
   if(request.url == "/produtos")
   response.end("<html><body><h1>Listando os produtos</h1></body></html");
});

server.listen(3000,"localhost");

console.log('servidor está rodando');
