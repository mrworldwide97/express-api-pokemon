import {
  addPokemonService,
  deletePokemonByIdService,
  getAllPokemonService,
  getPokemonByIdService,
  udpatePokemonService,
} from "../services/pokemon.service.js";

export const addPokemonController = async (req, res, image) => {
  let response;
  const { numero_pokedex, nom, taille, poids, types, competences } = req.body;
  if (
    numero_pokedex &&
    nom &&
    image &&
    taille &&
    poids &&
    types &&
    competences
  ) {
    response = await addPokemonService(
      numero_pokedex,
      nom,
      taille,
      poids,
      image,
      types,
      competences
    );
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("All Parameters required");
  }
};

export const updatePokemonController = async (req, res, image) => {
  let response;
  const { id } = req.params;
  const { numero_pokedex, nom, taille, poids, types, competences } = req.body;
  if (
    id &&
    numero_pokedex &&
    nom &&
    taille &&
    poids &&
    image &&
    types &&
    competences
  ) {
    response = await udpatePokemonService(
      id,
      numero_pokedex,
      nom,
      taille,
      poids,
      image,
      types,
      competences
    );
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("All Parameters required");
  }
};

export const deletePokemonController = async (req, res) => {
  let response;
  const { id } = req.params;

  if (id) {
    response = await deletePokemonByIdService(id);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter 'id' required");
  }
};

export const getAllPokemonController = async (req, res) => {
  let response = await getAllPokemonService();
  res.status(response.code).send({
    message: response.message,
    data: response.data,
    error: response.error,
  });
};

export const getPokemonByIdController = async (req, res) => {
  let response;
  const { id } = req.params;

  if (id) {
    response = await getPokemonByIdService(id);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter 'id' required");
  }
};
