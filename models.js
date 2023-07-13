const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  power: {
    type: Number,
    default: 0,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;