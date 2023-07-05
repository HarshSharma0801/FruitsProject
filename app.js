//get required
const express = require("express");
const mongoose = require("mongoose");
//initialize express
const app = express();
const PORT = process.env.PORT || 27017;
mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true});
const fruitsSchema = new mongoose.Schema(
  {
    name:String,
    rating:Number,
    review:String
  }
)
const Fruit = mongoose.model('Fruit',fruitsSchema);
const fruit = new Fruit(
  {
    name:"apple",
    rating:5,
    review:"An apple a day keeps doctor away"
  }
);
Fruit.insertMany([fruit]) 
    .then(function(){
        console.log("Successfully saved all the fruits to fruitsDB");
    })
    .catch(function(err){
        console.log(err);
    });
    app.get('/',(req,res)=>{
      console.log('hello');
    })

app.listen(PORT,()=>{
  console.log('server started');
});






