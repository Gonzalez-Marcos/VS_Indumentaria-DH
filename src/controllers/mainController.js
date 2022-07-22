const path = require('path');

const controller = {
    home: (req, res) => {
        res.render('products/home');
    },
}

module.exports = controller;