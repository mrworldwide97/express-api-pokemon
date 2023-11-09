import Router from "express";
import { signin, signup } from "../controllers/auth.controller.js";
const AuthRouter = Router();

AuthRouter.post("/signin", (req, res) => signin(req, res));
AuthRouter.post("/signup", (req, res) => signup(req, res));

export { AuthRouter };
