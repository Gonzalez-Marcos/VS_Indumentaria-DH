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

const productCartController = require('../controllers/productCartController');

//Aca importamos todos los metodos de products
const productsController = require('../controllers/productsController');

const editarController = require('../controllers/editarController');

const router = express.Router();

router.get('/productCart', productCartController.productCart);

router.get('/', productsController.listProducts);

router.get('/editar', editarController.editar);

router.get('/create', productsController.create);
router.post('/create', upload.single('image'), productsController.store);

router.get('/:id/', productsController.productDetail);

module.exports = router;