module.exports = (sequelize, dataTypes) => {
    const alias = "Colour";
    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
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
            through: "product_colour",
            foreignKey: "ColourId",
            otherKey: "ProductId",
            timestamps: false
        })
    }
    return Colour;
}