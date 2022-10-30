const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controller = {
	home: (req, res) => {
        db.Product.findAll({
			include: [
				{association: "category"},
				{association: "images"}
		    ]
		})
		.then((products) => {
			res.render('products/home', { products});
		})
		.catch(err => res.send(err));
	}
};

module.exports = controller;