const express = require ('express');
const mainRouter = require('./routers/main');

const app = express();

const path = require('path');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);


app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
}); 
