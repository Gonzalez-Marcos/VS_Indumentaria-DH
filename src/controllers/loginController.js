const path = require('path');

const controller = {
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/login.html'));
    },
}

module.exports = controller;