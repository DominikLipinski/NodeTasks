var express = require('express');
    app = express();

app.get('/', function(req, res) {
    res.send('This is our homepage!');
});

app.get('/contact', function(req, res) {
    res.send('This is our contact!');
});

app.get('/profile/:id', function(req, res) {
    res.send('You wanted to see profile of user of ID: ' + req.params.id);
});

app.listen(3000);