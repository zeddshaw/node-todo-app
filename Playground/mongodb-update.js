const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db) => {
   if(error) {
       return console.log("Unable to connect to database");
   }
   console.log("Connected to Database");

   db.collection('users').findOneAndUpdate({
      _id:new ObjectID('5b129d84b1c7e85c66acfbdd')
   },{
       $set:{
           name:'Rohan'
       },
       $inc:{
           age:1
       }
   },{
       returnOriginal : false
   }).then((result) => {
       console.log('Updated one element');
       console.log(result);
   });

   //db.close();
});