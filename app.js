var express = require('express');
    app = express();

app.get('/', function(req, res) {
    res.send('This is our homepage!');
});

app.get('/contact', function(req, res) {
    res.send('This is our contact!');
});

app.listen(3000);