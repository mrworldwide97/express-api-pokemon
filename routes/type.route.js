import Router from "express";
import {
  addTypeController,
  getTypeByIdController,
  updateTypeController,
} from "../controllers/type.controller.js";
import { authenticateToken } from "../middlewares/authentificationToken.js";

const TypeRouter = Router();
TypeRouter.post("/", authenticateToken, (req, res) =>
  addTypeController(req, res)
);
TypeRouter.put("/:id", authenticateToken, (req, res) =>
  updateTypeController(req, res)
);
TypeRouter.get("/:id", authenticateToken, (req, res) =>
  getTypeByIdController(req, res)
);

export { TypeRouter };
