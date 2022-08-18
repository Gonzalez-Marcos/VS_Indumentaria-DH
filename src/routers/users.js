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

const usersController = require('../controllers/usersController');

const logMiddleWare = require('../middleWares/logDBMiddleWare') //Ruta de middleWares para DB

const router = express.Router();
//rutas

router.get('/login', usersController.login);
router.post('/', logMiddleWare, usersController.logged);

router.get('/register', usersController.register);
//nose si lo de upload va o no , pasa que lo image no pedidmos y lo vemos demas digamos, sabiendo que 
//upload lo usamos solo para pedir archivos????????
//claro pero yo buscaba algo mas global clarooo porque nose para mis una trampita esto del upload
router.post('/register', upload.single('image'), usersController.createUser);

// router.get('/pass', passwController.passw);
// router.post('/login', passwController.recPassw);

module.exports = router;