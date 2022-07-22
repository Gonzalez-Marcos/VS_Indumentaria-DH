const path = require('path');

const controller = {
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productDetail.html'));
    },
}

module.exports = controller;