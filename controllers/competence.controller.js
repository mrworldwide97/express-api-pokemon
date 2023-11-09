import {
  addCompetenceService,
  getAllCompetenceService,
  updateCompetenceService,
} from "../services/competence.service.js";

export const addCompetenceController = async (req, res) => {
  let response;
  const { nom, description, puissance, precision, pp_max, type } = req.body;
  if (nom && description && puissance && precision && pp_max && type) {
    response = await addCompetenceService(
      nom,
      description,
      puissance,
      precision,
      pp_max,
      type
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

export const updateCompetenceController = async (req, res) => {
  let response;
  const { id } = req.params;
  const { nom, description, puissance, precision, pp_max, type } = req.body;
  if (id && nom && description && puissance && precision && pp_max && type) {
    response = await updateCompetenceService(
      id,
      nom,
      description,
      puissance,
      precision,
      pp_max,
      type
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

export const getAllCompetenceController = async (req, res) => {
  let response = await getAllCompetenceService();
  res.status(response.code).send({
    message: response.message,
    data: response.data,
    error: response.error,
  });
};
