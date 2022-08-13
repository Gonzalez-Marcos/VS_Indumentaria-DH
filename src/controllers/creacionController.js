const path = require('path');

const controller = {
    create: (req, res) => {
        res.render('products/creacion_actual');
    },
}

module.exports = controller;