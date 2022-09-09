const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const methodOverride =  require('method-override');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const mainRouters = require('./routers/main_router');
const productRouters = require('./routers/products_router');
const userRouters = require('./routers/users_router');

const app = express();

app.use(session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
}))

app.use(cookies());
app.use(userLoggedMiddleware);

app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use('/', mainRouters);

app.use('/products', productRouters);

app.use('/users', userRouters);

app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
});