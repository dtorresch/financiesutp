// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta de autenticación
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Realizar la lógica de autenticación (ejemplo: verificar en una base de datos)

    if (username === 'usuario' && password === 'contrasena') {
        res.status(200).json({ message: 'Autenticación exitosa' });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

