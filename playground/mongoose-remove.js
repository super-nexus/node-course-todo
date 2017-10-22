const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {ObjectID} = require('mongodb');

//Todo.remove({}) --> this removes everything

// Todo.remove({}).then(
//   (results) => {
//     console.log(results.result);
//   }
// );

//This one also returns the document
//Todo.findOneAndRemove({})



Todo.findByIdAndRemove('59ec7de285ed4f4dcc527bce').then((todo) => {
  console.log(todo);
});
