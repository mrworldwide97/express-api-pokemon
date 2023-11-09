import mongoose from "mongoose";

export const initDB = (MONGO_URI) => {
  mongoose
    .set("strictQuery", false)
    .connect(MONGO_URI)
    .then(() => console.log(`Database : ${MONGO_URI} Connected`))
    .catch(() => "MongoDB connection Error");
};
