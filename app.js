import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import dashboardRoutes from "./src/modules/dashboard/routes/dashboard.route.js";

// Cargar variables de entorno
dotenv.config();
console.log("dasfdsdfsd")

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

app.use('/', dashboardRoutes);

app.listen(PORT, () => {
  console.log(`🕺 I'M ALIVE => PORT: ${PORT}`);
});
