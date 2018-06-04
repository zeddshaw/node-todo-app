const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {Users} = require('./models/users');
const {ObjectID} = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser');  //express json parsing middleware

const app = express();

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Listening to server on port ${port}`);
});

app.use(bodyParser.json());

//Adding Todos
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

//Displaying Todos
app.get('/todos',(req,res) => {

    Todo.find().then((docs) => {
        console.log('Received a get request');
        res.send({docs});
    },(err) => {
        res.status(400).send(err);
    });
});

//Finding specific doc
app.get('/todos/:id',(req,res) => {

    id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send('Id not valid');
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    },(err) => {
        res.status(400).send();
    });

});