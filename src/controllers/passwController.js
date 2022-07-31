const path = require('path');

const controller = {
    passw: (req, res) => {
        res.render('users/pass');
    },
}

module.exports = controller;