var express = require('express');
    app = express();
    bodyParser = require('body-parser');
    urlencodedParser = bodyParser.urlencoded({ extended: false })    

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact', {query: req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function(req, res) {
    var data = {name: 'John', age: 33, hobbies: ['eating', 'sleeping', 'playing games']};
    res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);