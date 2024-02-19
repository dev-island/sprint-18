//Create Todo model using Mongoose
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number,
  img: String,
  id: Number,
  nickname: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Pokemon", schema);
