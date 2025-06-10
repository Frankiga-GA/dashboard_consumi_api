import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Cargar variables de entorno
dotenv.config();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "modules"));

app.get("/", async (req, res) => {
  try {
    res.render("dashboard/views/home/dashboard");
  } catch (error) {
    console.error("Error al cargar la página de inicio:", error);
    res.status(500).send("Error al cargar la página de inicio");
  }
});

app.listen(PORT, () => {
  console.log(`🕺 I'M ALIVE => PORT: ${PORT}`);
});
