const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://Harsh2:dragonite1@forprojects.wjbiut0.mongodb.net/SyncWiz',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error",function () {
  console.log("Error");
}); 
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);
app.listen(27017, () => {
    console.log("Server is running at port 27017");
  });




