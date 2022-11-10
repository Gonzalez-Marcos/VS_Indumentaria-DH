const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('(*) Tienes que escribir un nombre').bail()
        .isLength({ min: 5 }).withMessage('(*) Debe contener al menos 2 caracteres'),

    body('image')
        .custom((value, { req }) => {
            const file = req.file;
            const acceptedExtensions = ['.JPG', '.JPEG', '.PNG', '.GIF', '.bmp', '.tiff', '.psd'];

            if (!file) {
                throw new Error('(*) Tienes que subir una imagen');
            } else {
                const fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`(*) Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }

            return true;
        }),

    body('price')
        .notEmpty().withMessage('(*) Debes ingresar un precio').bail()
        .isNumeric(),

    body('category')
        .notEmpty().withMessage('(*) Debes ingresar una categoria').bail(),

    body('description')
        .notEmpty().withMessage('(*) Tienes que escribir una descripción').bail()
        .isLength({ min: 20 }).withMessage('(*) Debe contener un mínimo de 8 carateres')

]