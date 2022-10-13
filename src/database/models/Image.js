module.exports = (sequelize, dataTypes) => {
    const alias = "Image";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        products_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    const config = {
        tableName: 'images_product',
        timestamps: false
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models) => {
        Image.belongsTo(models.Product, {
            as: "product",
            foreignKey: "products_id"
        });
    };

        return Image;
    }