const path = require('path');

const controller = {
    productCart: (req, res) => {
        res.render('products/productCart');
    },
}

module.exports = controller;