// src/modules/dashboard/routes/dashboard.route.js

import express from 'express';
import { getDashboard } from '../controllers/dashboard.controller.js';

const dashboardRoutes = express.Router();

// Ruta principal del dashboard
dashboardRoutes.get('/dashboard', getDashboard);

export default dashboardRoutes;