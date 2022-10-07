module.exports = (sequelize, dataTypes) => {
    const alias = "Size";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };
    
    const config = {
        tableName: 'sizes',
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);

    Size.belongToMany(models.Product, {
        as: "products",
        through: "products_sizes",
        foreignKey: "sizes_id",
        otherKey: "products_id",
        timestamps: false
    })

    
    return Size;
}