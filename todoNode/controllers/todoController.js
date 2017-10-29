var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var data = [{task: 'get milk'}, {task: 'buy eggs'}, {task: 'go to sleep'}];


module.exports = function(app) {

app.get('/todo', function(req, res) {
    res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req, res) {
    data.push(req.body);
    // res.render('todo', {todos: data});
    res.json(data);
    });

app.delete('/todo', function(req, res) {
        
});

};
