const { body } = require("express-validator");

module.exports.loginValidator = [
  body("username", "Email cannot be empty").not().isEmpty(),
  body("password", "The minimum password length is 6 characters").isLength({
    min: 6,
  }),
];

module.exports.createValidator = [
  body("username", "username cannot be not empty").not().isEmpty(),
  body("email", "Invalid email").isEmail(),
  body("password", "password cannot be Empty").not().isEmpty(),
  body("password", "The minimum password length is 6 characters").isLength(
    { min: 6 }
  ),
];
