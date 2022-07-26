const express = require('express');

const productCartController = require('../controllers/productCartController');

const productDetailController = require('../controllers/productDetailController');

const editarController = require('../controllers/editarController');

const router = express.Router();

router.get('/productCart', productCartController.productCart);

router.get('/productDetail', productDetailController.productDetail);

router.get('/editar', editarController.editar);

module.exports = router;