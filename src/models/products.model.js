import { db } from './firebase.js'; // Importa Firestore de Firebase

import { collection, getDocs } from 'firebase/firestore'; // Importa la función collection de Firestore

const productsCollection = collection(db, "products"); // Referencia a 'products' collection en Firestore

export const getAllProducts = async () => {
    try {
    const snapshot = await getDocs(productsCollection); // Trae los documentos de la colección
    const products = snapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
    })); // Mapea los documentos a un formato más legible
    return products;
  } catch (error) {
        console.error(error); // Manejo de errores
    }
};