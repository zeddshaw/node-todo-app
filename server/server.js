const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {Users} = require('./models/users');

const express = require('express');
const bodyParser = require('body-parser');  //express json parsing middleware

const app = express();

app.listen(3000,() => {
    console.log('Listening to server on port 3000');
});

app.use(bodyParser.json());

app.post('/todos',(req,res) => {

    var newTodo = new Todo({
        text : req.body.text
    });

    newTodo.save().then((doc) => {
        console.log('Inserted new document');
        res.send(doc);
    },(err) => {
        res.status(400).send(err);  //400 status stands for bad request
    });
});


