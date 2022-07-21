const path = require('path');

const controller = {
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
}

module.exports = controller;