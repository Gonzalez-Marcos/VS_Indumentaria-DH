const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// cada tres string genera un .
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	home: (req, res) => {
		const visit = products.filter(product => product.category === 'visit');
		const news = products.filter(product => product.category === 'news');
		res.render('products/home', {visit, news});
	}
};

module.exports = controller;