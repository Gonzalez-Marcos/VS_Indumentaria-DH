module.exports = (sequelize, dataTypes) => {
    const alias = "Size";

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
        tableName: 'sizes',
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);

    Size.associate = (models) => {

    Size.belongsToMany(models.Product, {
        as: "products",
        through: "products_sizes",
        foreignKey: "sizes_id",
        otherKey: "products_id",
        timestamps: false
    });
};

    
    return Size;
}