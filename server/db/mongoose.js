const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ToDoApp');  //connect to heroku mlab addon

module.exports = {mongoose};