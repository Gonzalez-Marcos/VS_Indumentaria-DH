module.exports = (sequelize, dataTypes) => {
    const alias = "Size";
    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    const config = {
        tableName: 'sizes',
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);
    Size.associate = (models) => {
        Size.belongsToMany(models.Product, {
            as: "products",
            through: "product_size",
            foreignKey: "SizeId",
            otherKey: "ProductId",
            timestamps: false
        });
    }  
    return Size;
}