const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name')
		.notEmpty().withMessage('(*) Tienes que escribir un nombre').bail()
		.isLength({ min: 2 }).withMessage('(*) Debe contener al menos 2 caracteres'),

	body('last_name')
		.notEmpty().withMessage('(*) Tienes que escribir tu apellido'),

	body('gender')
		.notEmpty().withMessage('(*) Debes seleccionar un género'),

	body('phone')
		.notEmpty().withMessage('(*) Debes ingresar un número').bail()
		.isLength({ max: 12 }).withMessage('(*) Superaste el límite de caracteres'),

	body('email')
		.notEmpty().withMessage('(*) Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('(*) Debes escribir un formato de correo válido'),

	body('confirm_email').custom((value, {req}) => {
		if (value !== req.body.email) {
			throw new Error('(*) El email debe ser igual')
		}
		return true;
	}),

	body('password')
		.notEmpty().withMessage('(*) Tienes que escribir una contraseña').bail()
		.isLength({ min: 8 }).withMessage('(*) Debe contener un mínimo de 8 carateres')
		.custom((value, { req }) => {

			const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
			if (!regex.test(value)) {
				throw new Error(['(*) Debe contener una letra mayúscula, una minúscula, un número y un carácter especial']);
			}
			return true;
		}),

	body('confirm_password').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('(*) Las contraseñas no coinciden');
		}
		return true;
	}),

	body('interests')
		.notEmpty().withMessage('(*) Tienes que elegir un interés'),

	body('image')
		.custom((value, { req }) => {
			const file = req.file;
			const acceptedExtensions = ['.jpg', '.jpeg', '.png','.git', '.bmp', '.tiff', '.psd'];

			if (!file) {
				throw new Error('(*) Tienes que subir una imagen');
			} else {
				const fileExtension = path.extname(file.originalname);
				if (!acceptedExtensions.includes(fileExtension)) {
					throw new Error(`(*) Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
				}
			}

			return true;
		})
]