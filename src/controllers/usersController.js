// const fs = require('fs');
// const path = require('path');
const bcryptsjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const User = require('../models/User');


const controller = {
    register: (req, res) => {
        // res.cookie('testing', 'Hola Mundo', {maxAge: 1000 * 30});
        return res.render('users/register');
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        const userInDB = User.findByField('email', req.body.email);
        if(userInDB){
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya se encuentra registrado'
                    }
                    },
                oldData: req.body
            });
        }

        const userToCreate = {
            ...req.body,
            password: bcryptsjs.hashSync(req.body.password, 10),
            confirm_password: bcryptsjs.hashSync(req.body.confirm_password, 10), 
            image: req.file.filename
        }

        const userCreate = User.create(userToCreate);

        return res.redirect('./login');
    },

    login: (req, res) => {
        
        return res.render('users/login');
    },
    contacto: (req, res) => {
        
        return res.render('users/contacto');
    },

    loginProcess: (req, res) => {

        const userToLogin = User.findByField('email', req.body.email);
        if(userToLogin) {

            const isCorrectPassword = bcryptsjs.compareSync(req.body.password, userToLogin.password);

           if(isCorrectPassword){

            delete userToLogin.password;
            req.session.userLogged = userToLogin;

            if(req.body.remember_user){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2});
            };

            return res.redirect('./userProfile')
           }
           return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        })
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Email no registrado'
                }
            }
        })
    },

    profile: (req, res) => {
        return res.render('users/userProfile', {
            user: req.session.userLogged,
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;



























// //const users = [];
// const usersFilePath = path.join(__dirname, '../database/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// //con eso llamas al json usuarios
// const controller = {
//     login: (req, res) => {
//         res.render('users/login');
//     },
//     logged: (req,res) => {
//         res.redirect('/');
//     },
//     register: (req, res) => {

//         res.render('users/register');
//     },
//     createUser: (req, res) => {
//         // const {name, last_name} = req.body;
//         // if (!name || !last_name){
//         //     res.status(400).send('Escribir todos los campos obligatorios')
//         //     return;
//         // }
//         // let newUser = {
//         //     name,
//         //     last_name
//         // };
//         // users.push(newUser);
//         // const json_users = JSON.stringify(users)
//         // fs.writefileSync('src/database/users.json', json_users, 'utf-8')
//         // res.send('received');
//         const usersClone = users;
//         const newUser = {
//             id: usersClone.length,
//             name_user: req.body.name_user,
//             last_name: req.body.last_name,
//             date_birth: req.body.date_birth,
// 			type: req.body.type,
//             number_dni: req.body.number_dni,
//             gender: req.body.gender,
//             phone: req.body.phone,
//             email: req.body.email,
//             confirm_email: req.body.confirm_email,
//             password: req.body.password,
//             confirm_password: req.body.confirm_password,
//             interests: req.body.interests,
//             determination: req.body.determination,
//             newsletter: req.body.newsletter
//         };
//         usersClone.push(newUser);
//         fs.writeFileSync(usersFilePath, JSON.stringify(usersClone, null, '  '));
//         //redirect vuelve a la list products
//         res.redirect('/');
//     }
// };

module.exports = controller;