const express = require ('express');
const mainRouter = require('./routers/main');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
});

