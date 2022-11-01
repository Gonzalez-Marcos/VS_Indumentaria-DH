module.exports = (sequelize, dataTypes) => {
    let alias = "ProductSize";
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
        SizeId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'product_size',
        timestamps: false
    };
    const ProductSize = sequelize.define(alias, cols, config);
    return ProductSize;
}