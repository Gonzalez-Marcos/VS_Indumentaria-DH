module.exports = (sequelize, dataTypes) => {
    const alias = "Color";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        colours: {
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };

    const config = {
        tableName: 'colours',
        timestamps: false
    };

    const Color = sequelize.define(alias, cols, config);

    Color.associate = (models) => {

        Color.belongToMany(models.Products, {
            as: "products",
            through: "colours_has_products",
            foreignKey: "colours_id",
            otherKey: "products_id",
            timestamps: false
        })
    }



    return Color;
}