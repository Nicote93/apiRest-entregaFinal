import "dotenv/config";// Carga variables entorno desde .env
import express from "express";// Traigo express
const app = express();// Inicio express

app.use(express.json());// Parsear JSON

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API REST - Talento tech 2025 by Nicote93" });
});// Ruta bienvenida

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));