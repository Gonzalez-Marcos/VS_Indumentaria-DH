const path = require('path');

const controller = {
    passw: (req, res) => {
        res.render('users/pass');
    },
    recPassw: (req, res) => {
        res.redirect('/login');
    }
}

module.exports = controller;