import { db } from "./firebase.js"; // Importa Firebase de Firestore

import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore"; // Traigo las funciones necesarias de Firestore   

const productsCollection = collection(db, "products"); // Colección de productos en Firestore

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);// Traigo todos los documentos de la colección
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));// Mapeo los documentos a un formato más amigable
    return products;// Traigo los productos
  } catch (error) {
    console.error(error);// Manejo de errores
  }
}; // Traigo todos los productos

export const getProductById = async (id) => {
  try {
    const docRef = doc(productsCollection, id);// Referencia al documento por ID
    const docSnap = await getDoc(docRef);// Traigo el documento por ID
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };// Si el documento existe, Traigo el ID y los datos
    } else {
      return null;// Si no existe, Indico null
    }
  } catch (error) {
    console.error(error);// Manejo de errores
  }
}; // Traigo un producto por ID

export const createProduct = async (newProduct) => {
  try {
    const docRef = await addDoc(productsCollection, newProduct);// Agrego un nuevo documento a la colección
    return { id: docRef.id, ...newProduct };// Trae el ID del nuevo producto junto con sus datos
  } catch (error) {
    console.error(error);
  }
}; // Creo un nuevo producto

export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsCollection, id);// Referencia al documento por ID
    await setDoc(docRef, updatedProductData, { merge: true });// Actualiza el documento con los nuevos datos
    return { id, ...updatedProductData };// Trae el ID y los datos actualizados
  } catch (error) {
    console.error(error);// Manejo de errores
    return null;// Si ocurre un error, indica null
  }
}; // Actualizo un producto ya creado  

export const deleteProduct = async (id) => {
  try {
    const docRef = doc(productsCollection, id);// Referencia al documento por ID
    await deleteDoc(docRef);// Elimina el documento de la colección
    return true;// Indica true si la eliminación fue exitosa
  } catch (error) {
    console.error(error);// Manejo de errores
    return false;// Indica false si ocurre un error
  }
}; // Elimino un producto