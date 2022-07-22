const express = require('express');

const loginController = require('../controllers/loginController');

const registerController = require('../controllers/registerController');

const router = express.Router();

router.get('/', loginController.login);

router.get('/', registerController.register);

module.exports = router;