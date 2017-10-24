var http = require('http');
    server = http.createServer(function(req, res){
        console.log('We made request: ' +req.url);
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hey there');
    });

server.listen(3000, '127.0.0.1');
console.log('listening to 3000 server...');