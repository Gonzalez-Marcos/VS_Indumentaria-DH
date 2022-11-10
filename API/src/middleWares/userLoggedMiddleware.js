
const db = require('../database/models');


async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
	let userFromCookie;
    
	if(emailInCookie) {
		userFromCookie = await db.User.findOne({
            where: {
				email: emailInCookie,
			}
		})
		.then(user => {
            data = JSON.parse(JSON.stringify(user));
			return data;
		})
	}
    
	if (userFromCookie) {
        req.session.userLogged = userFromCookie;
	}
	if (req.session.userLogged) {
        res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}
    
	next();
}

module.exports = userLoggedMiddleware;



// Se comenta todo lo usada con JSON

// const User = require('../models/User');

// function userLoggedMiddleware(req, res, next) {
//         res.locals.isLogged = false;

//         const emailInCookie = req.cookies.userEmail;
//         const userFromCookie = User.findByField('email', emailInCookie);

//         if (userFromCookie){
//             req.session.userLogged = userFromCookie;
//         }

//         if(req.session && req.session.userLogged){
//             res.locals.isLogged = true;
//             res.locals.userLogged = req.session.userLogged;
//         }
        
//     next();
// };

// module.exports = userLoggedMiddleware;