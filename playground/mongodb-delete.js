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

  // deleteMany
  // todos.deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // todos.deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete


  //users collection (name, age, location)
  var users = client.db(dbName).collection('Users');
  users.findOneAndDelete({_id: new ObjectID("5a6b2473b118202eb4c2f516")}).then((result) => {
    console.log(result);
  });

  client.close();

});