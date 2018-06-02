const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db) => {
   if(error) {
       return console.log("Unable to connect to database");
   }
   console.log("Connected to Database");

//Delete methods : deleteOne,deleteMany,findOneAndDelete

   db.collection('users').findOneAndDelete({name:'Rohan'}).then((result) => {
       console.log(result);
   })

   //db.close();
});