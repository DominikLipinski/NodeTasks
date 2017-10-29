var express = require('express');
    app = express();
    todoController = require('./controllers/todoController');

app.set('view engiine', 'ejs');
app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log('Listening to port 3000...')