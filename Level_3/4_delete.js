const mongoose = require('mongoose');
const Task = require('./model/task');

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });

task.deleteOne({ title: "Learn MongoDB" })
    .then(result => console.log(result))
    .catch(error => console.log(error));
