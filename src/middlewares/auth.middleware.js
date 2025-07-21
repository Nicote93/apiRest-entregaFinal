import jwt from "jsonwebtoken"; // Traigo jsonwebtoken

export const auth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];// Obtengo el token del header Authorization
  // Verifica si el token existe en la cabecera Authorization

  if (!token) return res.sendStatus(401);// Si no hay token, retorna 401

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);// Si el token es invalido, retorna 403
    next();// Si el token es valido, continua con la siguiente funcion
  });
};// Traigo middleware de autenticacion
// Verifica el token JWT en las solicitudes protegidas