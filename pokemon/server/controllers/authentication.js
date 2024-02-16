const validationResult = require("express-validator");
const User = require("../models/User");

// Create a user
exports.signUp = async (req, res) => {

  const { username, password, email } = req.body;

  const user = new User({
    username,
    password,
    email,
  });

  await user
    .save()
    .then((data) => {
      res.send({
        message: "User created successfully!!",
        user: data,
        token: user.id,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating todo",
      });
    });
};

// Get a single todo
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: ["Invalid password"] });
    }

    res.status(200).send({ token: user.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
