module.exports = (sequelize, dataTypes) => {
    const alias = "Image";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.TEXT,
            allowNull: false
        }

    };
    
    const config = {
        tableName: 'products_images',
        timestamps: false
    };

    const Image = sequelize.define(alias, cols, config);

    Image.belongTo(models.Product, {
        as: "product",       
        foreignKey: "product_id"
    })

    
    return Image;
}