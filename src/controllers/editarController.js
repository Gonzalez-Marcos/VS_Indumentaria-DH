const path = require('path');

const controller = {
    editar: (req, res) => {
        res.render('products/editar_producto');
    },
}

module.exports = controller;