import { Router } from "express";
const router = Router();

import { login } from "../controllers/auth.controller.js"; // Traigo login de controladores

router.post("/login", login);// Ruta para el login

export default router;