const express = require('express');
const router = express.Router();

const userApiController = require('../../controllers/api/userController');

router.get('/users/all', userApiController.all);
router.get('/user/:id', userApiController.detail);



module.exports = router;