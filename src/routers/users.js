const express = require('express');

const loginController = require('../controllers/loginController');

const registerController = require('../controllers/registerController');

const passwController = require('../controllers/passwController')

const router = express.Router();

router.get('/login', loginController.login);

router.post('/', loginController.logged)

router.get('/register', registerController.register);

router.get('/pass', passwController.passw);

router.post('/login', passwController.recPassw);

module.exports = router;