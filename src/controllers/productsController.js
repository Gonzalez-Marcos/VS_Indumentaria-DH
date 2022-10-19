const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Products = db.Product;
const ProductColour = db.ProductColour;
const ProductSize = db.ProductSize;
const Colours = db.Colour;
const Images = db.Image;
const Sizes = db.Size;
const Categories = db.Category;
const controller = {
	listProducts: (req, res) => {
        Products.findAll({
            include:[
                {association: 'images'},
                {association: 'colours'},
                {association: 'sizes'}
        ]
        }).then(products => {
            res.render('products/listProducts', { products });
        });
        
	},
	productDetail: async (req, res) => {
        const productId = req.params.id;
        const promProduct =  await Products.findByPk(productId, { include: ['category', 'images', 'colours', 'sizes'] });
        const promProducts = await Products.findAll({include: [{association: 'category'}, {association: 'images'}, {association: 'colours'}, {association: 'sizes'}]});
        res.render('products/productDetail', { productPk: promProduct, allProducts: promProducts });
    },
	create: async (req, res) => {
        const colours = await Colours.findAll();
        const sizes = await Sizes.findAll();
        const categories = await Categories.findAll();
        res.render('products/creacion_actual', { colours, sizes, categories });
    },
	store: (req, res) => {
        Products.create({
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            CategoryId: Number(req.body.category)
        })
        .then((productCreated) => {
            
            let colores = req.body.colour;
            let productColours = colores.map((colour) => {
                return {
                    ProductId: productCreated.id,
                    ColourId: Number(colour)
                };
            });
            ProductColour.bulkCreate(productColours);

            let sizes = req.body.size;
            let productSizes = sizes.map((size) => {
                return {
                    ProductId: productCreated.id,
                    SizeId: Number(size)
                };
            });
            ProductSize.bulkCreate(productSizes);

            Images.create({
                name: req.file.filename,
                ProductId: productCreated.id
            });

            res.redirect('/products/');
            
        });
    },
    edit: async (req, res) => {
        const product = await Products.findByPk(req.params.id, { include: ['images', 'colours', 'sizes'] });
        const colours = await Colours.findAll();
        const sizes = await Sizes.findAll();
        const categories = await Categories.findAll();
        res.render('products/editar_producto', { product, colours, sizes, categories });
    },
    update: async (req, res) => {
        const productId = req.params.id;
        const coloursProductActually = await ProductColour.findAll({where: { ProductId: productId}});
        const sizesProductActually = await ProductSize.findAll({where: { ProductId: productId}});
        Products.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            CategoryId: req.body.category
        },{
            where: {id: productId}
        }).then(() => {
            let coloursEdit = req.body.colour; 
            let sizesEdit = req.body.size;
            //edit colours
            let coloursModify = coloursProductActually.filter((colour) => {
                let ok = true;
                for (let i = 0; i < coloursEdit.length && ok; i++) { // Corta cuando no hay mas following o cuando ya se encontró uno
                    if (Number(coloursEdit[i]) == colour.ColourId) {
                        ok = false;
                        coloursEdit.splice(i, 1);
                    }
                };
                return ok;
            });
            let cantActually = 0;
			for (let i = 0; i < coloursEdit.length; i++)  {
				if (coloursModify.length > i) {
                    db.ProductColour.update({
                        ColourId: Number(coloursEdit[i])
                    },{
                        where: { id: coloursModify[i].id }
                    });
					cantActually += 1;
				}
			}
            if (coloursEdit.length - cantActually > 0) {
                for (let i = cantActually; i < coloursEdit.length; i++) {
                    ProductColour.create({
                        ProductId: productId,
                        ColourId: Number(coloursEdit[i])
                    });
                }
            }
            if (coloursModify.length > cantActually) {
                for (let i = cantActually; i < coloursModify.length; i++) {
                    ProductColour.destroy({where: {id: coloursModify[i].id}});
                }
            }
            //edit sizes
            let sizesModify = sizesProductActually.filter((size) => {
                let ok = true;
                for (let i = 0; i < sizesEdit.length && ok; i++) { // Corta cuando no hay mas following o cuando ya se encontró uno
                    if (Number(sizesEdit[i]) == size.SizeId) {
                        ok = false;
                        sizesEdit.splice(i, 1);
                    }
                };
                return ok;
            });
            cantActually = 0;
			for (let i = 0; i < sizesEdit.length; i++)  {
				if (sizesModify.length > i) {
                    db.ProductSize.update({
                        SizeId: Number(sizesEdit[i])
                    },{
                        where: { id: sizesModify[i].id }
                    });
					cantActually += 1;
				}
			}
            if (sizesEdit.length - cantActually > 0) {
                for (let i = cantActually; i < sizesEdit.length; i++) {
                    ProductSize.create({
                        ProductId: productId,
                        SizeId: Number(sizesEdit[i])
                    });
                }
            }
            if (sizesModify.length > cantActually) {
                for (let i = cantActually; i < sizesModify.length; i++) {
                    ProductSize.destroy({where: {id: sizesModify[i].id}});
                }
            }
            res.redirect('/products/');
        })
        .catch(error => res.send(error))
    },
    delete: (req, res) => {
        const productId = req.params.id;
        ProductColour.destroy({where: { ProductId: productId}})
        .then(() => {
            ProductSize.destroy({where: { ProductId: productId}});
            Images.destroy({where: { ProductId: productId}});
            Products.destroy({where: { id: productId}});
            res.redirect('/products/');
        });
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    }
};

module.exports = controller;