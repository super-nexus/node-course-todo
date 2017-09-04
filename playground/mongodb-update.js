// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    console.log('Unable to connect to database server');
    return;
  }

  console.log('Connected to MongoDB server');


  //findOneAndUpdate
//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('59ada57836f1a69284fbe464')
//   }, {
//     $set: {
//       completed: true
//     }
//   },{
//     returnOriginal: false
//   }
// ).then((result) => {
//   console.log(result);
// })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59aae758ab466d6ba1af5817')
  },{
    $set: {
      name: 'Slavko'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })


  // db.close();
});
