const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  debugger;

  //todos collection (text, completed)
  // var todos = client.db(dbName).collection('Todos');
  //
  // todos.insertOne({
  //   text: 'wake the dog',
  //   completed: true
  // }, (err, result) => {
  //   if(err) return console.log('unable to insert Todo', err);
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //users collection (name, age, location)
  var users = client.db(dbName).collection('Users');
  users.insertOne({
    name: 'Shaheer',
    age: 26,
    location: 'Mahallah'
  }, (err, result) => {
    if(err) return console.log('unable to insert user', err);
    console.log(`user ${JSON.stringify(result.ops[0], undefined, 2)} inserted at ${result.ops[0]._id.getTimestamp()}`);
  });


  client.close();

});