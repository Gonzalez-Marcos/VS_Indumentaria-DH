module.exports = (sequelize, dataTypes) => {
    const alias = "Product";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: { 
            type: dataTypes.DECIMAL(10, 2) 
        },
        descriptions: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        categories_id: {
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

        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: "categories_id",
        })

        Product.belongsToMany(models.Colour, {
            as: "colours",
            through: "colours_products",
            foreignKey: "products_id",
            otherKey: "colours_id",
            timestamps: false
        })

        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "products_sizes",
            foreignKey: "products_id",
            otherKey: "sizes_id",
            timestamps: false
        })

        Product.hasMany(models.Image, {
            as: "images",       
            foreignKey: "product_id"
        })

    }

    return Product;
}