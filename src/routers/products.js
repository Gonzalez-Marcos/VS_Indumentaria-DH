const express = require('express');

const productCartController = require('../controllers/productCartController');

const productDetailController = require('../controllers/productDetailController');

const router = express.Router();

router.get('/', productCartController.productCart);

router.get('/', productDetailController.productDetail);

module.exports = router;