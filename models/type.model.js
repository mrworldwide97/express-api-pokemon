import mongoose from "mongoose";

const TypeSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
});

const TypeModel = mongoose.model("types", TypeSchema);

export { TypeModel };
