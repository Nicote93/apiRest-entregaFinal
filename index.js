import "dotenv/config";// Carga variables entorno desde .env
import express from "express";// Traigo express
const app = express();// Inicio express

app.use(express.json());// Parsear JSON

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API REST - Talento tech 2025 by Nicote93" });// mensaje de bienvenida
});// Ruta bienvenida

import productsRouter from "./src/routes/products.router.js";// Importo router de productos
app.use("/api", productsRouter);// uso del router de productos

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);// uso del router de autenticación

const PORT = process.env.PORT || 3001;// Puerto del servidor, si no hay en .env, usa 3001
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));// Inicio el servidor y muestro el puerto en consola