import { Router } from "express";// Importo Router de express
const router = Router();// router para manejar las rutas de autenticación

import { login } from "../controllers/auth.controller.js";// Traigo controlador de autenticación

router.post("/login", login);// Ruta para iniciar sesión y obtener un token JWT

export default router;// Exporto router de autenticación
// maneja la autenticación de usuarios y la generación de tokens