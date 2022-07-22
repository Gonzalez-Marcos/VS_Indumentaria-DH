const path = require('path');

const controller = {
    productDetail: (req, res) => {
        res.render('products/productDetail');
    },
}

module.exports = controller;
