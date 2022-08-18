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

//Aca importamos todos los metodos de products
const productsController = require('../controllers/productsController');


const router = express.Router();

router.get('/productCart', productsController.productCart);

router.get('/', productsController.listProducts);

//para mostrar la vista del create
router.get('/create', productsController.create);

//para cargar los datos del nuevo producto
router.post('/create', upload.single('image'), productsController.store);

//ruta para ver el detalle de un producto segun id
router.get('/:id/', productsController.productDetail);

//ruta para mostrar la vista de la edicion de un producto segun el id
router.get('/edit/:id/', productsController.edit); 

//ruta por el cual recibe los datos del producto a editar
router.put('/edit/:id/', upload.single('image'), productsController.update);

//ruta para eliminar un producto
router.delete('/delete/:id', productsController.delete); 

module.exports = router;