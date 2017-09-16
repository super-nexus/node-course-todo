var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })

});

app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  })

});

// GET /todos/:id

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if(!ObjectID.isValid(id)){
    return res.status(404).send('Id is invalid');
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.send('Unable to find todo with id: ', id);
    }

    res.send(`Todo \n ${todo}`);

  })

})

app.listen(3000, () => {
  console.log('Started on port 3000');
})


module.exports = {app};
