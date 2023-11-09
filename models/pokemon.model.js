import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  numero_pokedex: {
    type: String,
  },
  nom: {
    type: String,
  },
  taille: {
    type: Number,
  },
  poids: {
    type: Number,
  },
  image: {
    type: String,
  },
  types: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "types",
    },
  ],
  competences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "competences",
    },
  ],
});

const PokemonModel = mongoose.model("pokemons", PokemonSchema);

export { PokemonModel };
