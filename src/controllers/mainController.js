const path = require('path');

const controller = {
    home: (req, res) => {
        res.render('home');
    },
}

module.exports = controller;