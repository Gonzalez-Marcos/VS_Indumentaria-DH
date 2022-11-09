const express = require('express');
const { body } = require('express-validator') //Libreria de Validacion
const router = express.Router();


//Aca importamos todos los metodos de products
const productsController = require('../controllers/productsController');
const productUploadFile = require('../middlewares/multerProductsMiddleware');


router.get('/', productsController.listProducts);

//para mostrar la vista del create
router.get('/create', productsController.create);

//para cargar los datos del nuevo producto
router.post('/create', productUploadFile.single('image'), productsController.store);

//ruta para ver el detalle de un producto segun id
router.get('/:id/', productsController.productDetail);

// //ruta para mostrar la vista de la edicion de un producto segun el id
router.get('/edit/:id/', productsController.edit); 

// //ruta por el cual recibe los datos del producto a editar
router.put('/edit/:id/', productUploadFile.single('image'), productsController.update);

// //ruta para eliminar un producto
router.delete('/delete/:id', productsController.delete); 

module.exports = router;