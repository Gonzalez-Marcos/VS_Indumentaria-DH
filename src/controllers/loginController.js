const { read } = require('fs');
const path = require('path');

const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    logged: (req,res) => {
        res.redirect('/');
    }
}

module.exports = controller;