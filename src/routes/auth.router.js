import { Router } from "express";
const router = Router();

import { login } from "../controllers/auth.controller.js";// Traigo controlador de autenticación

router.post("/login", login);// Ruta para iniciar sesión y obtener un token JWT

export default router;