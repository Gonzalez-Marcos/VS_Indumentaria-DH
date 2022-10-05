const { json } = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// cada tres string genera un .
//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	listProducts: (req, res) => {
		res.render('products/listProducts', { products });
	},
	productDetail: (req, res) => {
		const productIndex = products.find(product => product.id == req.params.id);
		const visited = products.filter(product => product.category === 'visit');
        res.render('products/productDetail', { productIndex, visited });
    },
	create: (req, res) => {
        res.render('products/creacion_actual');
    },
	store: (req, res) => {
        const productsClone = products;
        const newProduct = {
            id: productsClone.length,
            name: req.body.name,
            price: req.body.price,
            waist: req.body.waist,
			color: req.body.color,
            category: req.body.category,
            description: req.body.description,
            image: req.file.filename
        };
        productsClone.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(productsClone, null, '  '));
        //redirect vuelve a la list products
        res.redirect('/products/');
    },
    edit: (req, res) => {
        const product = products.find(product => product.id == req.params.id);
        res.render('products/editar_producto', { product });
    },
    update: (req, res) => {
        const productIndex = products.findIndex(product => product.id == req.params.id);
        console.log(req.body)
        products[productIndex] = {
            id: productIndex,
            name: req.body.name,
            price: req.body.price,
            sizes: req.body.sizes,
            color: req.body.color,
            category: req.body.category,
            description: req.body.description,
            image: products[productIndex].image
        };
        let productModifidJSON = JSON.stringify(products, null, '  ');
        fs.writeFileSync(productsFilePath, productModifidJSON);
        res.redirect('/products/');
    },
    delete: (req, res) => {
        const allProducts = products.filter(product => product.id != req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(allProducts, null, '  '));
        res.redirect('/products/');
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    }
};

module.exports = controller;