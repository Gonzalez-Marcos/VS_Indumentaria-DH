module.exports = (sequelize, dataTypes) => {
    const alias = "Product";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: { 
            type: dataTypes.DECIMAL(10, 2) 
        },
        descriptions: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        talles_id: {
            type: dataTypes.STRING(8),
            allowNull: false
        },
        categories_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        images_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };
    
    const config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {

        Product.belongTo(models.Category, {
            as: 'categorias',
            foreignKey: "categories_id",
        })

    }

    return Product;
}