const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const methodOverride =  require('method-override');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const mainRouters = require('./routers/mainRouter');
const productRouters = require('./routers/productsRouter');
const userRouters = require('./routers/usersRouter');

//RUTAS DE API//

// Routing Api
const userApiRouters = require('./routers/api/apiUserRouter');
const productApiRouters = require('./routers/api/apiProductRouter');
const categoryApiRouters = require('./routers/api/apiCategoryRouter');


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

// Routing Api
app.use('/api', userApiRouters);
app.use('/api', productApiRouters);
app.use('/api', categoryApiRouters);

app.listen (8080, () => {
    console.log('Servidor iniciado en: http://localhost:8080');
});