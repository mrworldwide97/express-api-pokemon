import { setResponse, setError } from "../types/response.js";
import { PokemonModel } from "../models/pokemon.model.js";

export const addPokemonService = async (
  numero_pokedex,
  nom,
  taille,
  poids,
  image,
  types,
  competences
) => {
  let data;
  try {
    const newPokemon = await PokemonModel.create({
      numero_pokedex,
      nom,
      taille,
      poids,
      image,
      types,
      competences,
    });
    data = setResponse(200, "Pokemon created successfully", newPokemon);
  } catch (error) {
    data = setError(500, "Unexpected error while creating Pokemon", error);
  }
  return data;
};

export const udpatePokemonService = async (
  id,
  numero_pokedex,
  nom,
  taille,
  poids,
  image,
  types,
  competences
) => {
  let data;
  try {
    const pokemon = await PokemonModel.findByIdAndUpdate(id, {
      numero_pokedex,
      nom,
      taille,
      poids,
      image,
      types,
      competences,
    });
    if (pokemon) {
      data = setResponse(200, "Pokemon updated successfully", pokemon);
    } else {
      data = setResponse(404, "Pokemon not found", {});
    }
  } catch (error) {
    data = setError(500, "Unexpected error while updating Pokemon", error);
  }
  return data;
};

export const deletePokemonByIdService = async (id) => {
  let data;
  try {
    const pokemon = await PokemonModel.findByIdAndDelete(id);
    if (pokemon) {
      data = setResponse(200, "Pokemon removed successfully", pokemon);
    } else {
      data = setResponse(404, "Pokemon not found", {});
    }
  } catch (error) {
    data = setError(500, "Unexpected error while removing Pokemon", error);
  }
  return data;
};

export const getPokemonByIdService = async (id) => {
  let data;
  try {
    const pokemon = await PokemonModel.findById(id).populate([
      "types",
      "competences",
    ]);
    if (pokemon) {
      data = setResponse(200, "Pokemon fetched successfully", pokemon);
    } else {
      data = setResponse(404, "Pokemon not found", {});
    }
  } catch (error) {
    data = setError(500, "Unexpected error while fetching Pokemon", error);
  }
  return data;
};

export const getAllPokemonService = async () => {
  let data;
  try {
    const pokemon = await PokemonModel.find().populate([
      "types",
      "competences",
    ]);
    data = setResponse(200, "All Pokemon fetched successfully", pokemon);
  } catch (error) {
    data = setError(500, "Unexpected error while fetchin all Pokemons", error);
  }
  return data;
};
