// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    console.log('Unable to connect to database server');
    return;
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59aae65a27859f6ae5c69850')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },
  // (err) => {
  //   console.log('Unable to fetch todos', err);
  // })


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },
  // (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({
    name: 'Josef'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Unable to load Users', err);
  })

  // db.close();
});
