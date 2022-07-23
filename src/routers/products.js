const express = require('express');

const productCartController = require('../controllers/productCartController');

const productDetailController = require('../controllers/productDetailController');

const router = express.Router();

router.get('/productCart', productCartController.productCart);

router.get('/productDetail', productDetailController.productDetail);

module.exports = router;