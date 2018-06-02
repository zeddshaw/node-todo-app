const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db) => {
   if(error) {
       return console.log("Unable to connect to database");
   }
   console.log("Connected to Database");

db.collection('Todos').find({completed:'Yes'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
},(error) => {
    console.log('Unable to find data',error);
});

db.collection('Todos').find({_id:new ObjectID('5b12674e1756ba63de3f98e0')}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    },(error) => {
        console.log('Unable to find data',error);
    });

   //db.close();
});