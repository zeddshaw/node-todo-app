const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db) => {
   if(error) {
       return console.log("Unable to connect to database");
   }
   console.log("Connected to Database");

   db.collection('Todos').insertOne({
       creator : 'Arjun',
       completed : 'No'
   } , (error,result) => {
       if(error)
       {
           return console.log("There was an error");
       }

       console.log(JSON.stringify(result.ops,undefined,2));
   });

   db.close();
});