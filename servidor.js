const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 8080;

const todo = ()=>{
    const contenido = fs.readFileSync(`./productos.txt`, 'utf-8')
    const all = JSON.parse(contenido)
    return all

}



app.get('/productos', (req, res) => {
    productos=todo()
    res.send(productos);
})

app.get('/productoRandom', (req, res) => {
    productos=todo()
    res.send(productos[Math.floor(Math.random() * productos.length)]);
})


const server = app.listen(PORT, () => {
    console.log(`servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en el servidor ${error}`));

