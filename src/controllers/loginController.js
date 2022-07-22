const path = require('path');

const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
}

module.exports = controller;