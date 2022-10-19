module.exports = (sequelize, dataTypes) => {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255)
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        CategoryId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }

    };
    
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {

        Product.belongsTo(models.Category, {
            foreignKey: "CategoryId",
            as: 'category'
        });

        Product.belongsToMany(models.Colour, {
            as: "colours",
            through: "product_colour",
            foreignKey: "ProductId",
            otherKey: "ColourId"
        });

        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "product_size",
            foreignKey: "ProductId",
            otherKey: "SizeId",
            timestamps: false
        });

        Product.hasMany(models.Image, {
            as: "images",       
            foreignKey: "ProductId"
        });
    }

    return Product;
}