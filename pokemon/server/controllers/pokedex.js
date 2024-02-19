const Pokemon = require("../models/Pokemon");

const catchPokemon = async (req, res) => {
  const { id: userId } = req.params;
  const { name, height, weight, img, id } = req.body.pokemon;
  const pokemon = new Pokemon({
    name,
    height,
    weight,
    img,
    id,
    nickname: "",
    userId,
  });
  await pokemon
    .save()
    .then((data) => {
      res
        .status(200)
        .send({ message: `Success, you caught ${name}!`, pokemon: data });
    })
    .catch((err) => {
      return res.status(500).send({ message: "Failed to catch" });
    });
};
const getPokemon = async (req, res) => {
  const { id: userId } = req.params;
  const pokemans = await Pokemon.find({ userId });
  if (!pokemans) {
    return res.status(404).send({ message: "No pokemon found", pokemans: [] });
  }
  res.status(200).send({ message: `here's yo pokemans`, pokemon: pokemans });
};

const updateNickname = async (req, res) => {
  const { pokemonId } = req.params;
  const { nickname } = req.body;
  console.log("NICKNAME", nickname)
  const pokemon = await Pokemon.findByIdAndUpdate(pokemonId, { nickname }, { new: true });
  pokemon.save();
  if (!pokemon) {
    return res.status(404).send({ message: "Pokemon not found" });
  }
  res.status(200).send({ message: "Nickname updated", pokemon });
};
module.exports = {
  catchPokemon,
  getPokemon,
  updateNickname,
};
