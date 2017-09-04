// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'andrija', age: 18};
// var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    console.log('Unable to connect to database server');
    return;
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  //
  // }, (err, result) => {
  //
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });


  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Josef',
  //   age: 13,
  //   location: 'Kiev'
  // } , (err, result) => {
  //
  //   if(err){
  //     return console.log('Unable to insert to Users', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // })

  db.close();
});
