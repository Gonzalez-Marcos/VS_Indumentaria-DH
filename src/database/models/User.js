module.exports = (sequelize, dataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        name_user: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT,
            allowNull: false
        }

    };
    
    const config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    // User.associate = (models) => {

    //     User.belongToMany(models.Product, {
    //         as: 'producto',
    //         through: "products_has_users",
    //         foreignKey: "users_id",
    //         otherKey: "products_id"
    //     })
    // }

    return User;
}
