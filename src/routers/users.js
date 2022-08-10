const express = require('express');

const { body } = require('express-validator') //Libreria de Validacion

const loginController = require('../controllers/loginController');

const registerController = require('../controllers/registerController');

const passwController = require('../controllers/passwController')

const router = express.Router();

const logMiddleWare = require('../middleWares/logDBMiddleWare') //Ruta de middleWares para DB



router.get('/login', loginController.login);

router.post('/', logMiddleWare, loginController.logged)

router.get('/register', registerController.register);

router.get('/pass', passwController.passw);

router.post('/login', passwController.recPassw);

module.exports = router;