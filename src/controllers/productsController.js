const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;
const Categories = db.Category;
const Colours = db.Colour;
const Images = db.Image;
const Sizes = db.Size;

// cada tres string genera un .
//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    listProducts: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('products/listProducts', { products });
            })
    },
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.render('products/productDetail', { product });
            })
            .catch(error => res.send(error));
    },
    create: (req, res) => {
        res.render('products/create_product');
    },
    store: (req, res) => {
        // const productsClone = products;
        // const newProduct = {
        //     id: productsClone.length,
        //     name: req.body.name,
        //     price: req.body.price,
        //     waist: req.body.waist,
        //     color: req.body.color,
        //     category: req.body.category,
        //     description: req.body.description,
        //     image: req.file.filename
        // };
        // productsClone.push(newProduct);
        // fs.writeFileSync(productsFilePath, JSON.stringify(productsClone, null, '  '));
        // //redirect vuelve a la list products
        // res.redirect('/products/');
    },
    edit: (req, res) => {
        const productId = req.params.id;
        const promProducts = Products.findByPk(productId, { include: ['images_product','colours', 'categories', 'sizes'] });
        const promImages = Images.findAll();
        const promColours = Colours.findAll();
        const promCategories = Categories.findAll();
        const promSizes = Sizes.findAll();
        Promise
            .all([promProducts, promImages, promColours, promCategories, promSizes])
            .then(([Product, allImages, allColours, allCategories, allSizes]) => {
                return res.render('products/editar_producto', { Product, allImages, allColours, allCategories, allSizes})
            })
            .catch(error => res.send(error))

    },
    update: (req, res) => {
        const productId = req.params.id;
        Product
            .update(
                {
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    categories_id: req.body.categories_id,
                },
                {
                    where: { id: productId }
                })
            .then(() => {
                return res.redirect('/products/');
            })
            .catch(error => res.send(error))
    },

    delete: (req, res) => {
            const productId = req.params.id;
            db.Product.destroy({ where: { id: productId } })
                .then(() => {
                    res.redirect('/');
                })
                .catch(error => res.send(error));
        },

    productCart: (req, res) => {
        res.render('products/productCart');
    }
};

module.exports = productsController;