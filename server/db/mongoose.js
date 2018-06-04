const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ToDoApp');  //connect to heroku mlab addon

module.exports = {mongoose};