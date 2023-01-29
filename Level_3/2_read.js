const mongoose = require('mongoose');
const Task = require('./model/task');

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });

task.find()
    .then(result => console.log(result))
    .catch(error => console.log(error));
