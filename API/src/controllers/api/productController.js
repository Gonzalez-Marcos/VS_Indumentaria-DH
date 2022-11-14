const db = require('../../database/models');


 const controller = {
     all: async function(req, res){
        try {
            const products = await db.Product.findAll({ include: ['images'] }); // para excluir un dato en especifico
            const categories = await db.Category.findAll({});
            const images = await db.Image.findAll({});
            const response = {
                status: 200,
                total: products.length,
                data: products,
                categories,
                images
            };
            return res.json(response);
        } catch (error) {
            return res.send(error);
        }
    },
    detail:  async function(req, res){
        try {
            const product = await db.Product.findByPk(req.params.id, { include: ['images']}); // para excluir un dato en especifico
            if(!product){
                return res.status(404).send({
                    status:404,
                    msg: 'producto no encontrado.'
                }); 
            };
            const response = {
                url: '/api/product/' + req.params.id,
                data: product,
                status: 200
            };
            return res.send(response);
        } catch (error) {
            return res.send(error);
        }
    }

 };

module.exports = controller;

