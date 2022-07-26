const path = require('path');

const controller = {
    creacion: (req, res) => {
        res.render('products/creacion_actual');
    },
}

module.exports = controller;