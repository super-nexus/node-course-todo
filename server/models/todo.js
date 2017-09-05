const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo}




// var newTodo = new Todo({
//   text: 'Cook dinner',
// })

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// },(err) => {
//   console.log(`Unable to connect`, err);
// })

// var secondTodo = new Todo({
//   text: 'Edit a video',
//
// })
//
// secondTodo.save().then((doc) => {
//   console.log('Saved secondTodo', doc);
// }, (err) => {
//   console.log('There was an error', err);
// })
//

//User model
