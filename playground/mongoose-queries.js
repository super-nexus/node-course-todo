const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {ObjectID} = require('mongodb');

var id = '59bd2c47d6c90f7123f59cda';

if(!ObjectID.isValid(id)){
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });

Todo.findById(id).then((todo) => {

  if(!todo){
    return console.log('Id not found');
  }

  console.log('Todo by id', todo);

}).catch((err) => console.log(err));
