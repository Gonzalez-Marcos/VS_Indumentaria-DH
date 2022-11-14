const express = require('express');
const router = express.Router();
const apiCategoryController = require('../../controllers/api/categoryController');

router.get('/categories/all', apiCategoryController.all);
// router.get('/categories/:id', apiCategoryController.categoryDetail);


module.exports = router;