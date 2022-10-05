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
            as: 'category',
            foreignKey: "category_id",
        })

        Product.belongToMany(models.Colours, {
            as: "colours",
            through: "colours_has_products",
            foreignKey: "colours_id",
            otherKey: "products_id",
            timestamps: false
        })

        Product.belongToMany(models.Sizes, {
            as: "size",
            through: "products_has_sizes",
            foreignKey: "size_id",
            otherKey: "products_id",
            timestamps: false
        })

        Product.hasMany(models.Image, {
            as: "images",       
            foreignKey: "product_id"
        })

    }

    return Product;
}