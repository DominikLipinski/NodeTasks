var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://testuser:testpass@ds115625.mlab.com:15625/tododb');

var todoSchema = new mongoose.Schema({
    item:String
});

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({item: 'run to hospital'}).save(function(err) {
    if(err) throw err;
    console.log('item saved');
})

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

app.delete('/todo/:task', function(req, res) {
        data = data.filter(function(todo) {
            return todo.task.replace(/ /g, '-') !== req.params.task;
        })
        res.json(data);
});

};
