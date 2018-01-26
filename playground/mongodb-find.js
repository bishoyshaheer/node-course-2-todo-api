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
  todos.find({_id: new ObjectID("5a6af707d0f61030088c0fb6")}).toArray().then((todos) => {
    console.log(JSON.stringify(todos, undefined, 2));
  });

  //users collection (name, age, location)
  var users = client.db(dbName).collection('Users');
  users.find({name: "Bishoy"}).count().then((count) => {
    console.log(`Objects with name Bishoy count : ${count}`);
  });


  client.close();

});