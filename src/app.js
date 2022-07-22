const express = require ('express');

//Trear rutas en constantes//
const mainRouter = require('./routers/main');

const productsRouter = require('./routers/products');

const usersRouter = require('./routers/users');
//Hasta aca todas las rutas//

const app = express();

const path = require('path');

const pathPublic = path.resolve(__dirname, '../public');
app.use(express.static(pathPublic));


//Uso de Templates Engines//
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));


//Llamamos todas las rutas en la app//
app.use('/', mainRouter);

app.use('/', productsRouter);

app.use('/', usersRouter);
//Hasta aca rutas//

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
}); 
