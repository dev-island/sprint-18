const connectUrl = process.env.MONGO_URI;
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connectDb = async () => {
  console.log("Connecting to the database");
  try {
    await mongoose.connect(connectUrl);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Could not connect to the database", error);
    process.exit();
  }
}

module.exports = connectDb;