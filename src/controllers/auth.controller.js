import jwt from "jsonwebtoken"; // Traigo jsonwebtoken

const default_user = {
  id: 1,
  email: "nicolas.vite.1993@gmail.com",
  password: "talentotech2025",
};// Credenciales de usuario por defecto

export const login = async (req, res) => {
  const { email, password } = req.body;// Obtengo email y password del body de la solicitud

  const user = { id: 1, email };// Usuario por defecto

  if (email === default_user.email && password === default_user.password) {
    const payload = { id: user.id };// Payload del token con el id del usuario
    const expiration = { expiresIn: "2h" };// Configuración expiración del token

    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
    res.json({ token });//
  } else {
    res.sendStatus(401).json({error: 'Credenciales inválidas'});// Si credenciales son incorrectas sale 401
  }
};// Función login verifica credencial usuario y genera un token si son válidas