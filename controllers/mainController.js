const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('home')
    },
    login: (req,res)=> {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },
    register: (req,res)=> {
    res.sendFile(path.join(__dirname, '../views/register.html'))
    },
    productCart: (req,res)=> {
    res.sendFile(path.join(__dirname, '../views/productCart.html'))
    },
    productDetail: (req,res)=> {
    res.sendFile(path.join(__dirname, '../views/productDetail.html'))
    }
    };

module.exports = controller;