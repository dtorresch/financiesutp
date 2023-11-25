const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Usuarios de ejemplo
const usuarios = [
    { id: 1, username: 'daniel', password: 'abc', edad: 32, correo: 'profesor@gmail.com', sexo: 'm' },
    { id: 2, username: 'Jose', password: 'abc', edad: 18, correo: 'jperez@gmail.com', sexo: 'm' },
    { id: 3, username: 'Marta', password: 'abc', edad: 22, correo: 'mcavalier@gmail.com', sexo: 'f' }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    res.json({ usuarios });
});

app.post('/api/login', (req, res) => {
    // Supongamos que la autenticación es básica y solo verifica si el usuario existe
    const { username, password } = req.body;
    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if (usuario) {
        res.json({ message: 'Autenticación exitosa' });
    } else {
        res.status(401).json({ message: 'Autenticación fallida' });
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
