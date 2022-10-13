module.exports = (sequelize, dataTypes) => {
    const alias = "Colour";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }

    };

    const config = {
        tableName: 'colours',
        timestamps: false
    };

    const Colour = sequelize.define(alias, cols, config);

    Colour.associate = (models) => {

        Colour.belongsToMany(models.Product, {
            as: "products",
            through: "colours_products",
            foreignKey: "colours_id",
            otherKey: "products_id",
            timestamps: false
        })
    }



    return Colour;
}