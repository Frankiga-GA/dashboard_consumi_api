import { fetchDataFromAPI } from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const apiData = await fetchDataFromAPI();

    // Ejemplo: solo pasamos un campo seguro
    const safeData = {
      values: Array.isArray(apiData.values)
        ? apiData.values.map((v) => parseFloat(v) || 0)
        : [],
    };

    res.render("dashboard/views/home/dashboard", {
      data: JSON.stringify(safeData), // Pasamos ya como JSON string
    });
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).send("Error al cargar el dashboard");
  }
};
