const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
//momgoDB atlas connection
mongoose.connect('mongodb+srv://Harsh:EcP7XcFo03xbJQvy@test.gd2ldlk.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.get('/',(req,res)=>{
    console.log('Made it');
})
app.listen(27017, () => {
    console.log("Server is running at port 27017");
  });



