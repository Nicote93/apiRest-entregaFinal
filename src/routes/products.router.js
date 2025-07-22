import { Router } from "express";// Importo Router de express
const router = Router();// manejar las rutas de productos

import { 
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct, 
} from "../controllers/products.controller.js";// Traigo los controladores de productos

import { auth } from "../middlewares/auth.middleware.js";// Traigo el middleware de autenticación

//rutas de acciones en productos
router.get("/products", getAllProducts);
router.get("/products/:id", auth, getProductById);
router.post("/products", auth, createProduct);
router.put("/products/:id", auth, updateProduct);
router.delete("/products/:id", auth, deleteProduct); 

export default router;// Exporto router productos