import {
  addTypeService,
  getTypeByIdService,
  updateTypeService,
} from "../services/type.service.js";

export const addTypeController = async (req, res) => {
  let response;
  const { nom } = req.body;
  if (nom) {
    response = await addTypeService(nom);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter 'name' is required");
  }
};

export const updateTypeController = async (req, res) => {
  let response;
  const { id } = req.params;
  const { nom } = req.body;
  if (id && nom) {
    response = await updateTypeService(id, nom);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter  'id and name' is required");
  }
};

export const getTypeByIdController = async (req, res) => {
  let response;
  const { id } = req.params;
  if (id) {
    response = await getTypeByIdService(id);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter  'id' is required");
  }
};
