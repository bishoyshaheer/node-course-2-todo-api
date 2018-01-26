const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  debugger;

  //todos collection (text, completed)
  var todos = client.db(dbName).collection('Todos');

  //users collection (name, age, location)
  var users = client.db(dbName).collection('Users');
  users.findOneAndUpdate(
    {_id: new ObjectID("5a6b681f59ccc4124448e0a6")},
    {
      $set: {
        name : "Shaheer Refaat"
      },
      $inc: {
        age: 3
      }
    },
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });


  client.close();

});