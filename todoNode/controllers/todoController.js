var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://testuser:testpass@ds115625.mlab.com:15625/tododb');

var todoSchema = new mongoose.Schema({
    item:String
});

var Todo = mongoose.model('Todo', todoSchema);



var urlencodedParser = bodyParser.urlencoded({ extended: false })
// var data = [{task: 'get milk'}, {task: 'buy eggs'}, {task: 'go to sleep'}];


module.exports = function(app) {

app.get('/todo', function(req, res) {
    Todo.find({}, function(err) {
        if(err) throw err;
    res.render('todo', {todos: data});
    });
});

app.post('/todo', urlencodedParser, function(req, res) {
    
    var newTodo = Todo(req.body).save(function(err) {
        if(err) throw err;
        res.json(data);
    }) ;
    });

app.delete('/todo/:task', function(req, res) {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err) {
        if(err) throw err;
        res.json(data);
        });
});

};
