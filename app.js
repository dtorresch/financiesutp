const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Definir una ruta de inicio de sesión simple
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Aquí deberías verificar las credenciales en tu base de datos
    if (username === 'usuario' && password === 'contraseña') {
        res.json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
