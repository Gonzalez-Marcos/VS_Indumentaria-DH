const path = require('path');

const controller = {
    product: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'));
    },
}

module.exports = controller;