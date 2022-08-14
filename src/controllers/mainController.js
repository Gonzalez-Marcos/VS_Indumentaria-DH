const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// cada tres string genera un .
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	home: (req, res) => {
		const visit = products.filter(products => products.category === 'visit');
		res.render('products/home', {visit});
	}
};

module.exports = controller;