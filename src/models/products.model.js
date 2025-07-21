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
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error(error);
  }
}; // Traigo todos los productos

export const getProductById = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}; // Traigo un producto por ID

export const createProduct = async (newProduct) => {
  try {
    const docRef = await addDoc(productsCollection, newProduct);
    return { id: docRef.id, ...newProduct };
  } catch (error) {
    console.error(error);
  }
}; // Creo un nuevo producto

export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsCollection, id);
    await setDoc(docRef, updatedProductData, { merge: true });
    return { id, ...updatedProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
}; // Actualizo un producto ya creado  

export const deleteProduct = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}; // Elimino un producto