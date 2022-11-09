const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name_user').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('last_name').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('gender').notEmpty().withMessage('Debes seleccionar un género'),
    body('phone').notEmpty().withMessage('Debes ingresar un número').bail()
        .isLength({max: 12}).withMessage('Superaste el límite de caracteres'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('confirm_email')
		.notEmpty().withMessage('El correo electrónico debe ser igual').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().isLength({min: 4, max: 16}).withMessage('Tienes que escribir una contraseña'),
    body('confirm_password').notEmpty().isLength({min: 4, max: 16}).withMessage('Tienes que escribir una contraseña igual'),
	body('interests').notEmpty().withMessage('Tienes que elegir un interés'),
	body('image').custom((value, { req }) => {
		const file = req.file;
		const acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			const fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]