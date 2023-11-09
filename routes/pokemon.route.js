import Router from "express";
import {
  addPokemonController,
  deletePokemonController,
  getAllPokemonController,
  getPokemonByIdController,
  updatePokemonController,
} from "../controllers/pokemon.controller.js";
import { authenticateToken } from "../middlewares/authentificationToken.js";
import multer from "multer";

const PokemonRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

var fileUpload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

PokemonRouter.post(
  "/",
  authenticateToken,
  fileUpload.array("image", 1),
  (req, res) => {
    try {
      if (!req.files)
        res.status(400).send({ message: "Vous n'avez pas envoyé d'image" });
      addPokemonController(req, res, req.files[0].filename);
    } catch (err) {
      res.status(500).send({
        message: "Impossible de télécharger vos images, nous y travaillons",
      });
    }
  }
);
PokemonRouter.delete("/:id", authenticateToken, (req, res) =>
  deletePokemonController(req, res)
);
PokemonRouter.put(
  "/:id",
  authenticateToken,
  fileUpload.array("image", 1),
  (req, res) => {
    try {
      if (!req.files)
        res.status(400).send({ message: "Vous n'avez pas envoyé d'image" });
      updatePokemonController(req, res, req.files[0].filename);
    } catch (err) {
      res.status(500).send({
        message: "Impossible de télécharger vos images, nous y travaillons",
      });
    }
  }
);
PokemonRouter.get("/:id", authenticateToken, (req, res) =>
  getPokemonByIdController(req, res)
);
PokemonRouter.get("/", authenticateToken, (req, res) =>
  getAllPokemonController(req, res)
);

export { PokemonRouter };
