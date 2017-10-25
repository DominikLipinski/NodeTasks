var http = require('http');
    fs = require('fs');
    server = http.createServer(function(req, res){
        console.log('We made request: ' +req.url);
        if(req.url === '/home' || req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'});   
            fs.createReadStream(__dirname + '/index.html').pipe(res);
        } else if (req.url === '/contact') {
            res.writeHead(200, {'Content-Type': 'text/html'});   
            fs.createReadStream(__dirname + '/contact.html').pipe(res);
        } else if (req.url === '/api') {
            var dogs = [{name: 'burek', age: 3}, {name: 'azor', age: 4}];
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(dogs));
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});   
            fs.createReadStream(__dirname + '/404.html').pipe(res);
        }
    });

server.listen(3000, '127.0.0.1');
console.log('listening to 3000 server...');