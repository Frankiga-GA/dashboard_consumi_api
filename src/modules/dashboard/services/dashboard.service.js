import axios from "axios";
import API_CONFIG from "../../../config/api/api.js";

export const fetchDataFromAPI = async () => {
  try {
    const response = await axios.post(
      API_CONFIG.endpoints.magicLoop,
      {
        meeting_id: "123456789"
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data; 
  } catch (error) {
    console.error("Error al consumir la API:", error.message);
    throw error;
  }
};