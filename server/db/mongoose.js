const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ToDoApp');

module.exports = {mongoose};