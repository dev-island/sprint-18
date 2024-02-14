//Create Todo model using Mongoose
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", schema);
