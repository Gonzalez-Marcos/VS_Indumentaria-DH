const express = require ('express');
const app = express();

const path = require('path');

const pathPublic = path.resolve(__dirname, '../public');
app.use(express.static(pathPublic));

/*Libreria para sobreescribir el metodo original y poder implementar
los metodos PUT o DELETE*/
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
/*Fin libreria*/

//Trear rutas en constantes//
const mainRouter = require('./routers/main');

const productsRouter = require('./routers/products');

const usersRouter = require('./routers/users');
//Hasta aca todas las rutas//

/* App use para ruta no encontrada*/
// app.use((req, res, next) => {
//     res.status(404).render('not-found');
// })
/* FIN App use para ruta no encontrada*/

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
