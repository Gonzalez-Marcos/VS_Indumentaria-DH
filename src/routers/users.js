const express = require('express');

const router = express.Router();

const { body } = require('express-validator') //Libreria de Validacion

//const loginController = require('../controllers/loginController');
const usersController = require('../controllers/usersController');
//const registerController = require('../controllers/registerController');

const passwController = require('../controllers/passwController')

const logMiddleWare = require('../middleWares/logDBMiddleWare') //Ruta de middleWares para DB


//rutas

//router.get('/login', loginController.login);
router.get('/login', usersController.login);


router.post('/', logMiddleWare, usersController.logged);

//router.get('/register', registerController.register);
router.get('/register', usersController.register);

router.get('/pass', passwController.passw);

router.post('/login', passwController.recPassw);

module.exports = router;