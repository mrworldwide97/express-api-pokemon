import Router from "express";
import {
  addCompetenceController,
  getAllCompetenceController,
  updateCompetenceController,
} from "../controllers/competence.controller.js";

import { authenticateToken } from "../middlewares/authentificationToken.js";

const CompetenceRouter = Router();

CompetenceRouter.post("/", authenticateToken, (req, res) =>
  addCompetenceController(req, res)
);
CompetenceRouter.put("/:id", authenticateToken, (req, res) =>
  updateCompetenceController(req, res)
);
CompetenceRouter.get("/", authenticateToken, (req, res) =>
  getAllCompetenceController(req, res)
);

export { CompetenceRouter };
