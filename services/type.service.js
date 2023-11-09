import { setResponse, setError } from "../types/response.js";
import { TypeModel } from "../models/type.model.js";
export const addTypeService = async (nom) => {
  let data;
  try {
    const newType = await TypeModel.create({
      nom,
    });
    data = setResponse(200, "Type created successfully", newType);
  } catch (error) {
    data = setError(500, "Unexpected error while creating type", error);
  }
  return data;
};

export const getTypeByIdService = async (id) => {
  let data;
  try {
    const type = await TypeModel.findById(id);
    if (type) {
      data = setResponse(200, "Type fetched successfully", type);
    } else {
      data = setResponse(404, "Type not found", {});
    }
  } catch (error) {
    data = setError(500, "Unexpected error while fetching type", error);
  }
  return data;
};

export const updateTypeService = async (id, nom) => {
  let data;
  try {
    const type = await TypeModel.findByIdAndUpdate(id, {
      nom,
    });
    if (type) {
      data = setResponse(200, "Type updated successfully", type);
    } else {
      data = setResponse(404, "Type not found", {});
    }
  } catch (error) {
    data = setError(500, "Unexpected error while updating type", error);
  }
  return data;
};
