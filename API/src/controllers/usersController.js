const fs = require('fs');
const path = require('path');
const bcryptsjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const User = require('../models/User');

const db = require('../database/models');

const sequelize = db.sequelize;


const controller = {
    register: (req, res) => {
        // res.cookie('testing', 'Hola Mundo', {maxAge: 1000 * 30});
        return res.render('users/register');
    },

    processRegister:async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const oldData = req.body;
                // fs.unlinkSync(path.join(__dirname, '../../../public/images/users/' + req.file?.filename))

                return res.render("users/register", { errors: errors.mapped(), oldData })
            }

            const userInDb = await db.User.findOne({
                where: { email: req.body.email }
            })

            if (userInDb) {
                const oldData = req.body;
                // fs.unlinkSync(path.join(__dirname, '../../public/images/users/' + req.file?.filename))
                return res.render("users/register", { errors: { email: { msg: 'Usuario ya registrado' } }, oldData })
            }

            const newUser = await db.User.create({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcryptsjs.hashSync(req.body.password, 10),
                image: req.file.filename
            })

            return res.redirect('login')

        } catch (error) {
            console.log(`Fallo en proceso de registro: ${error}`);
            return res.send(error)
        }
    },

    login: (req, res) => {
        
        return res.render('users/login');
    },
    contacto: (req, res) => {
        
        return res.render('users/contacto');
    },

    loginProcess: async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {

                return res.render("users/login", { errors: errors.mapped() });
            }

            const bodyInForm = {
                email: req.body.email,
                password: req.body.password
            }


            const userInDb = await db.User.findOne({
                where: {
                    email: bodyInForm.email
                }
            })

            if (!userInDb) {
                const oldData = req.body;
                return res.render("users/login", { errors: { email: { msg: "(*) El usuario ingresado no está registrado" } }, oldData });
            }

            const testPassword =  bcryptsjs.compareSync(bodyInForm.password, userInDb.password);

            if (!testPassword) {

                return res.render("users/login", { errors: { password: { msg: "(*) Contraseña incorrecta" } } });
            }

            if (req.body.remember_user) {
                res.cookie('rememberNTF', {
                    id: userInDb.id,
                    email: userInDb.email
                });
            }

            req.session.userLogged = {
                id: userInDb.id,
                email: userInDb.email
            };

            return res.redirect('/');

        } catch (error) {
            console.log(`Falle en proceso de login: ${error}`);
            return res.send("There was an unexpected error")
        }
    },
    
//ahi debe conectarse con la base de datos
    profile: async (req, res) => {
        try {
            let user = await db.User.findOne({
                where:{
                    email: req.session.userLogged.email
                }
            });
            // return res.send(user);
            res.render('users/userProfile',{user});
            
        } catch (error) {
            console.log("Falle en userController.userInfo: " + error); 
            return res.json(error);
        }
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('login');
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