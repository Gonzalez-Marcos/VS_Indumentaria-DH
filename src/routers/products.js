const express = require('express');

//const { body } = require('express-validator') //Libreria de Validacion

const productCartController = require('../controllers/productCartController');

const productDetailController = require('../controllers/productDetailController');

const editarController = require('../controllers/editarController');

const creacionController = require('../controllers/creacionController');

const router = express.Router();

router.get('/productCart', productCartController.productCart);

router.get('/productDetail', productDetailController.productDetail);

router.get('/editar', editarController.editar);

router.get('/create', creacionController.create);

module.exports = router;