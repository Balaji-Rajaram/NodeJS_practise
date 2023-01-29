const mongoose = require('mongoose');
const Task = require('./model/task');

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });

Task.find({ $text: { $search: "\"Learn MongoDB\"" } })
    .then(tasks => console.log(tasks))
    .catch(error => console.log(error));
