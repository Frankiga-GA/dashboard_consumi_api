import { fetchDataFromAPI } from "../services/dashboard.service.js";

/**
 * Controlador para mostrar dashboard con datos de la API
 * @param req
 * @param res
 */
export const getDashboard = async (req, res) => {
  try {
    const apiData = await fetchDataFromAPI();
    console.log("Datos recibidos de la API:", apiData); // 👈 Verifica aquí

    res.render("dashboard/views/home/dashboard", {
      data: JSON.stringify(apiData)
    });
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).send("Error al cargar el dashboard");
  }
};