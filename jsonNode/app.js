var http = require('http');
    fs = require('fs');
    server = http.createServer(function(req, res){
        console.log('We made request: ' +req.url);
        res.writeHead(200, {'Content-Type': 'application/json'})  
        var myObject = {
            name: 'Jon',
            surname: 'Snow',
            position: 'lord commander of Night Watch'
        };
    res.end(JSON.stringify(myObject));
       
    });

server.listen(3000, '127.0.0.1');
console.log('listening to 3000 server...');