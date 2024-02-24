const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la aplicación!');
});

app.get('/form', (req, res) => {
    res.send(`
<html>
    <head>
        <title>Formulario</title>
        <style>
            body { font-family: Arial, sans-serif; }
            form { margin: 20px; }
            input[type="text"], input[type="submit"] { padding: 10px; margin: 5px; }
        </style>
    </head>
        <body>
        <form>
            <label for="name">Nombre:</label><br>
            <input type="text" id="name" name="name"><br>
            <input type="submit" value="Enviar">
        </form>
        </body>
    </html>
`);
});

app.get('/redirect', (req, res) => {
    res.redirect('/');
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
