import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { initDB } from "./config/db.config.js";
import { TypeRouter } from "./routes/type.route.js";
import { PokemonRouter } from "./routes/pokemon.route.js";
import { CompetenceRouter } from "./routes/competence.route.js";
import { AuthRouter } from "./routes/auth.route.js";
import { fileURLToPath } from "url";
import { SwaggerTheme } from "swagger-themes";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { swaggerDoc } from "./apidocs/swaggerDoc.js";

dotenv.config();
initDB(process.env.MONGO_URI);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const theme = new SwaggerTheme("v3");

const options = {
  explorer: true,
  customCss: `.swagger-ui .topbar { display: none } .title span { display: none } .view-line-link.copy-to-clipboard { width: 24px !important; height: 24px !important;     margin: 0 5px !important;} ${theme.getBuffer(
    "flattop"
  )}`,
  customSiteTitle: "Documentation de l'api Pokemon",
  displayOperationId: true,
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.use("/api/types", TypeRouter);
app.use("/api/pokemons", PokemonRouter);
app.use("/api/abilities", CompetenceRouter);
app.use("/api/users", AuthRouter);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
