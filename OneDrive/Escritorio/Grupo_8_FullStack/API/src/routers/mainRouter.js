const express = require('express');

const { body } = require('express-validator') //Libreria de Validacion

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);

module.exports = router;