const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// cada tres string genera un .
//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	listProducts: (req, res) => {
		res.render('products/listproducts', { products });
	},
	productDetail: (req, res) => {
		const productIndex = products.find(product => product.id == req.params.id);
		const visited = products.filter(product => product.category === 'visit');
        res.render('products/productDetail', { productIndex, visited });
    },
};

module.exports = controller;