const fs = require('fs');
const path = require('path')

const logFilePath = path.join(__dirname, '../logs/logDB.txt' );

function logDBMiddleWare  (req, res, next) {

    fs.appendFileSync(logFilePath, 'Se creó un registro al ingresar en la página ' + req.url + '\n' );

    next();
}

module.exports = logDBMiddleWare;

//Muestra un registro cuando se ingresa a un formulario, almacenando el movimiento en logDB.txt