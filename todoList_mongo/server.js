require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDb = require("./db");
const router = require("./routes");
const cors = require("cors");
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

connectDb();

app.use("/api", router);

app.use((req, res, next) => {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: err.status, message: err.message });
});

app.listen(port, () => {
  console.log(`Worker ${process.pid} listening at port ${port}`);
});
