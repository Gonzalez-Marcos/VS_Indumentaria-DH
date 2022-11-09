module.exports = (sequelize, dataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
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
