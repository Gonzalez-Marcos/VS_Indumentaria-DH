const db = require('../database/models');
const Category = require('../database/models/Category');
const sequelize = db.sequelize;

const Products = db.Product;

// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// cada tres string genera un .
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	home: (req, res) => {
		db.Product.findAll()
            .then(products => {
				// const visit = products.filter(product => product.Category === 'visit');
				// const news = products.filter(product => product.Category === 'news');

                res.render('products/home', { products});
            })
		// res.render('products/home', {visit, news});
	}
};

module.exports = controller;