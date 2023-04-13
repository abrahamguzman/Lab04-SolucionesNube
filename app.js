const express = require('express');
const port = 5000;
const app = express();
var path = require('path');

app.set('view engines', 'ejs');
app.set('views', __dirname + '/templates')

app.get('/', (req, res) => {
    res.render(path.join(__dirname,'/templates/index.ejs'))
});

app.get('/clientes', (req, res) => {
    const clientes = [
        {nombre: "Milton", edad: "21", direccion: "Av. Central 1234", correo: "mguzman@gmail.com"},
        {nombre: "Abraham", edad: "30", direccion: "AA.HH. La huerta", correo: "aalbornoz@gmail.com"},
        {nombre: "Pato", edad: "40", direccion: "AA.HH. Ica", correo: "patopatel@soyiqueño.com"},
        {nombre: "Wayne", edad: "68", direccion: "Desierto Paracas", correo: "teextrañopato@gmail.com"},
        {nombre: "Bebesota", edad: "69", direccion: "A la espalda de tecsup", correo: "1patoigual20Raul@gmail.com"},
    ]
    res.render(path.join(__dirname,'/templates/clientes.ejs'), {clientes: clientes})
});

app.get('/productos', (req,res) => {
    const productos = [
        {nombre: "RTX 3060", precio: "1050", stock: "50", tipo: "Tarjeta"},
        {nombre: "Mouse g304", precio: "200", stock: "10", tipo: "Periferico"},
        {nombre: "Moto", precio: "4000", stock: "20", tipo: "Transporte"},
        {nombre: "Carro", precio: "6000", stock: "15", tipo: "Vehiculo"},
        {nombre: "RE IV Remake", precio: "200", stock: "100", tipo: "Videojuego"},

    ]
    res.render(path.join(__dirname,'/templates/productos.ejs'), {productos: productos})
});

app.listen(port)
console.log(`Server on port ${port} `)