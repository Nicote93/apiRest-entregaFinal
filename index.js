import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Bienvenido a la API REST - Talent tech 2025 by Nicote93'});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
