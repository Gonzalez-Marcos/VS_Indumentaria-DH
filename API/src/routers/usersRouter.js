const express = require('express');
const usersController = require('../controllers/usersController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validationsMiddleware = require('../middlewares/validationsMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const logMiddleWare = require('../middlewares/logDBMiddleWare'); //Ruta de middleWares para DB

const router = express.Router();
//rutas

//Formulario de Login
router.get('/login', guestMiddleware, usersController.login);

//Formulario de contacto
router.get('/contacto', usersController.contacto);

//Procesar login
router.post('/login', validationsMiddleware, usersController.loginProcess);

//Formulario de Perfil
//ahi debe conectarse con la base de datos
router.get('/userProfile/', authMiddleware, usersController.profile);

//Formulario logout
router.get('/logout/', usersController.logout);

//Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

//Procesar registro
router.post('/register', uploadFile.single('image'), validationsMiddleware, usersController.processRegister);

// router.get('/pass', passwController.passw);

// router.post('/login', passwController.recPassw);

module.exports = router;