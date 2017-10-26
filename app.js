var express = require('express');
    app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/profile/:id', function(req, res) {
    var data = {name: 'John', age: 33, hobbies: ['eating', 'sleeping', 'playing games']};
    res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);