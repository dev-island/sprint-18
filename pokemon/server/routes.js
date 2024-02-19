const express = require("express");
const router = express.Router();
const validate = require("./utils/validate");

const authentication = require("./controllers/authentication");
const authValidators = require("./validators/auth");

router.post("/auth", validate(authValidators.createValidator), authentication.signUp);
router.put("/auth", validate(authValidators.loginValidator), authentication.login);

const users = require("./controllers/users");
router.get("/users/:id", users.getUser);


const pokedex = require("./controllers/pokedex");
router.post("/users/:id/pokemon", pokedex.catchPokemon);
router.get("/users/:id/pokemon", pokedex.getPokemon);
router.put("/users/:id/pokemon/:pokemonId", pokedex.updateNickname);



module.exports = router;
