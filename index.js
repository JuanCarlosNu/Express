/*const http = require('http');

http.createServer((req, res)=>{
    res.end('Hello world');
}).listen(3000);*/
const express = require('express');
const app = express(); // con esto inicializamos express
app.

//middlewares
app.use(function (req, resp, next){
    console.log('requested url:' + req.url)
    next();
})

//rutas:
app.get('/', (req, res) => {
    res.end('Hola mundo'); 
});
app.get('/login', (req, res) => {
    res.end('Aqui va el login!'); 
});
//si la ruta solicitada no es ninguna de las anteriores:
app.get('*', ()=>{
    res.end('archivo o ruta no encontrado')
});
app.listen(3000, ()=> {
    console.log('servidor funcionando')
});
