const express = require ('express');
const app = express();

const path = require('path');
const methodOverride = require('method-override');
const pathPublic = path.resolve(__dirname, '../public');

app.use(express.static(pathPublic));
app.use(methodOverride('_method'));
/*Libreria para sobreescribir el metodo original y poder implementar
los metodos PUT o DELETE*/

//Fin libreria

//Trear rutas en constantes
const mainRouter = require('./routers/main');

const productsRouter = require('./routers/products');

const usersRouter = require('./routers/users');
//Hasta aca todas las rutas

//MiddleWares/
const logMiddleWare = require('./middleWares/logDBMiddleWare')

//Uso de Templates Engines//
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));


// Ruta de logMiddleWare
app.use(methodOverride('_method'));

app.use(logMiddleWare);

//Llamamos todas las rutas en la app//
app.use('/', mainRouter);

app.use('/products', productsRouter);

app.use('/users', usersRouter);
//Hasta aca rutas//

/* App use para ruta no encontrada*/
app.use((req, res, next) => {

    res.status(404).render("products/error-404");
})
/* FIN App use para ruta no encontrada*/

app.use(express.json());

app.use(express.urlencoded({extended: false})); //Permite capturar la informacion que viaja por POST

app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
});