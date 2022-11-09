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
        
        try {
            const ProductUpdate = Products.update({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                CategoryId: req.body.category
            },{
                where: {id: productId}
            });
            let coloursEdit = req.body.colour;
            let sizesEdit = req.body.size;
            for (let i = 0; i < coloursEdit.length; i++)  {
				ProductColour.upsert({
                    id: coloursProductActually.length > i ? coloursProductActually[i].id : 1000,
                    ProductId: productId,
                    ColourId: Number(coloursEdit[i])
                });
			}
			for (let i = coloursEdit.length; i < coloursProductActually.length; i++) {
                ProductColour.destroy({where: {id: coloursProductActually[i].id}});
            }
            //edit sizes
            for (let i = 0; i < sizesEdit.length; i++)  {
				ProductSize.upsert({
                    id: sizesProductActually.length > i ? sizesProductActually[i].id : 1000,
                    ProductId: productId,
                    SizeId: Number(sizesEdit[i])
                });
			}
			for (let i = sizesEdit.length; i < sizesProductActually.length; i++) {
                ProductSize.destroy({where: {id: sizesProductActually[i].id}});
            }

            return res.redirect('/products/');
        } catch(error) {
            res.send('Aca hay un error');
        }
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
    }
};

module.exports = controller;