const fs = require('fs');

const User = {
    fileName: './src/database/users.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function(){
        const allUsers = this.findAll();
        const lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id +1;
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text) {
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function(userData){
        const allUsers = this.findAll();
        const newUser = {
            id: this.generateId(),
            ...userData //Express operator
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function(id) {
        const allUsers = this.findAll();
        const finalUser = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, ' '));
        return true;
    },
}
// console.log(User.delete(1));

module.exports = User;