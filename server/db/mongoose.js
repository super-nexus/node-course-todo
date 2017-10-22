const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nexus2:proshifters@ds227035.mlab.com:27035/node-todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
