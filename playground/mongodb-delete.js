// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    console.log('Unable to connect to database server');
    return;
  }

  console.log('Connected to MongoDB server');


  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(`There was an error ${err}`);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) => {
  //   console.log(results.result.n);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  //Practice
  db.collection('Users').deleteMany({name: 'Josef'}).then((results) => {
    console.log(`Deleted ${results.result.n} Josefs`);
  })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59aaeefe6f3015709368acee')
  }).then((results) => {
    console.log(results);
  })
  // db.close();
});
