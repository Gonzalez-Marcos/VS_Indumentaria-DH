const express = require('express');
const router = express.Router();

const productController = require('../../controllers/api/productController');

router.get('/products/all', productController.all);
router.get('/product/:id', productController.detail);



module.exports = router;