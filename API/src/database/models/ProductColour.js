module.exports = (sequelize, dataTypes) => {
    let alias = "ProductColour";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        ProductId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        ColourId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_colour',
        timestamps: false
    };

    const ProductColour = sequelize.define(alias, cols, config);
    return ProductColour;
}