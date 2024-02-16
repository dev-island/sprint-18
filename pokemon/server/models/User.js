//Create Todo model using Mongoose
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", schema);
