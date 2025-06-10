// src/modules/dashboard/services/dashboard.service.js

import axios from 'axios';

// Importar la URL de la API
import API_CONFIG from '../../../config/api/api.js';

/**
 * Servicio que consume la API externa
 * @returns {Promise<any>} Datos procesados de la API
 */
export const fetchDataFromAPI = async () => {
  try {
    const response = await axios.post(
      API_CONFIG.endpoints.magicLoop,
      {
        meeting_id: "123456789"
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Axios no necesita verificar ok, lanza error automáticamente si falla
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error al consumir la API:', error.message);
    
    // Si hay respuesta del servidor, mostrar detalles
    if (error.response) {
      console.error('Respuesta de error de la API:', error.response.status, error.response.data);
    }

    throw error;
  }
};