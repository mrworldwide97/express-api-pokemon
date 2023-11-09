import mainDoc from "./mainDoc.json" assert { type: "json" };
import authentication from "./authentication.json" assert { type: "json" };
import pokemon from "./pokemon.json" assert { type: "json" };
import competence from "./competence.json" assert { type: "json" };
import types from "./types.json" assert { type: "json" };
const mergedDoc = {
  ...authentication,
  ...pokemon,
  ...competence,
  ...types,
};

mainDoc.paths = mergedDoc;
export const swaggerDoc = {
  ...mainDoc,
};
