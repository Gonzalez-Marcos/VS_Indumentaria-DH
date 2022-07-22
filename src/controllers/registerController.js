const path = require('path');

const controller = {
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/register.html'));
    },
}

module.exports = controller;