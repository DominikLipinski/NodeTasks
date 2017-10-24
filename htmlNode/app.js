var http = require('http');
    fs = require('fs');
    server = http.createServer(function(req, res){
        console.log('We made request: ' +req.url);
        res.writeHead(200, {'Content-Type': 'text/html'})   
        myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    });

server.listen(3000, '127.0.0.1');
console.log('listening to 3000 server...');