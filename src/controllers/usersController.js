const { read } = require('fs');
const path = require('path');

const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    logged: (req,res) => {
        res.redirect('/');
    },
    register: (req, res) => {
        res.render('users/register');
    },
};

module.exports = controller;