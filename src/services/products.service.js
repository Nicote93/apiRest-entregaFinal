import * as Model from "../models/products.model.js";// Importo el modelo de productos

export const getAllProducts = async () => {
  return await Model.getAllProducts();// Traigo todos los productos
};

export const getProductById = async (id) => {
  return await Model.getProductById(id);// Traigo un producto por ID
};

export const createProduct = async (newProduct) => {
  return await Model.createProduct(newProduct);// Creo un nuevo producto
};

export const updateProduct = async (id, updatedProductData) => {
  return await Model.updateProduct(id, updatedProductData);//
};

export const deleteProduct = async (id) => {
  return await Model.deleteProduct(id);// Elimino un producto
};