import mongoose from "mongoose";

const CompetenceSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  description: {
    type: String,
  },
  puissance: {
    type: Number,
  },
  precision: {
    type: String,
  },
  pp_max: {
    type: Number,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "types",
  },
});

const CompetenceModel = mongoose.model("competences", CompetenceSchema);

export { CompetenceModel };
