const express = require ('express');

//Trear rutas en constantes//
const mainRouter = require('./routers/main');

const productsRouter = require('./routers/products');

const usersRouter = require('./routers/users')
//Hasta aca todas las rutas//

const app = express();

const path = require('path');

const pathPublic = path.resolve(__dirname, '../public');

app.use(express.static(pathPublic));

//Llamamos todas las rutas en la app//
app.use('/', mainRouter);

app.use('/', productsRouter);

app.use('/', usersRouter);
//Hasta aca rutas//

app.use(express.json());

app.use(express.urlencoded({extended: false}));




// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });

// app.get('/productDetail', (req,res)=>{
//     res.sendFile(__dirname + '/views/productDetail.html');
// });
// app.get('/productCart', (req,res)=>{
//     res.sendFile(__dirname + '/views/productCart.html');
// });
// app.get('/register', (req,res)=>{
//     res.sendFile(__dirname + '/views/register.html');
// });
// app.get('/login', (req,res)=>{
//     res.sendFile(__dirname + '/views/login.html');
// });

app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
}); 
