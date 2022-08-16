const { read, fstat } = require('fs');
const path = require('path');

const users = [];

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
    createUsers: (req, res) => {
        const {name, last_name} = req.body;
        if (!name || !last_name){
            res.status(400).send('Escribir todos los campos obligatorios')
            return;
        }
        let newUser = {
            name,
            last_name
        };
        users.push(newUser);
        const json_users = JSON.stringify(users)
        fs.writefileSync('src/database/users.json', json_users, 'utf-8')
        res.send('received');
    }
};

module.exports = controller;