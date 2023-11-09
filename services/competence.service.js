import { CompetenceModel } from "../models/competence.model.js";
import { setResponse, setError } from "../types/response.js";

export const addCompetenceService = async (
  nom,
  description,
  puissance,
  precision,
  pp_max,
  type
) => {
  let data;
  try {
    const newCompetence = await CompetenceModel.create({
      nom,
      description,
      puissance,
      precision,
      pp_max,
      type,
    });
    data = setResponse(200, "Competence created successfully", newCompetence);
  } catch (error) {
    data = setError(500, "Unexpected error while creating Competence", error);
  }
  return data;
};

export const updateCompetenceService = async (
  id,
  nom,
  description,
  puissance,
  precision,
  pp_max,
  type
) => {
  let data;
  try {
    const competence = await CompetenceModel.findByIdAndUpdate(id, {
      nom,
      description,
      puissance,
      precision,
      pp_max,
      type,
    });

    if (competence) {
      data = setResponse(200, "Competence updated successfully", competence);
    } else {
      data = setResponse(404, "Competence not found", {});
    }
  } catch (error) {
    data = setError(500, "Unexpected error while updating Competence", error);
  }
  return data;
};

export const getAllCompetenceService = async () => {
  let data;
  try {
    const competences = await CompetenceModel.find().populate("type");

    if (competences) {
      data = setResponse(
        200,
        "All Competences fetched successfully",
        competences
      );
    } else {
      data = setResponse(404, "Competence not found", {});
    }
  } catch (error) {
    data = setError(
      500,
      "Unexpected error while fetching all Competences",
      error
    );
  }
  return data;
};
