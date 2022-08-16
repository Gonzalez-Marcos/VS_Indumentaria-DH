const express = require('express');
const multer = require('multer');
const { body } = require('express-validator') //Libreria de Validacion

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

//const loginController = require('../controllers/loginController');
const usersController = require('../controllers/usersController');
//const registerController = require('../controllers/registerController');
const passwController = require('../controllers/passwController')
const logMiddleWare = require('../middleWares/logDBMiddleWare') //Ruta de middleWares para DB

const router = express.Router();
//rutas

router.get('/login', usersController.login);
router.post('/', logMiddleWare, usersController.logged);

router.get('/register', usersController.register);
router.post('/register', upload.single('image'), usersController.createUser);

router.get('/pass', passwController.passw);
router.post('/login', passwController.recPassw);

module.exports = router;