const mongoose = require('mongoose');
const Task = require('./model/task');

mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true });

const task = new Task({
    title: 'Learn MongoDB',
    description: 'Learn how to interact with MongoDB using Mongoose'
});

task.save()
    .then(result => console.log(result))
    .catch(error => console.log(error));
