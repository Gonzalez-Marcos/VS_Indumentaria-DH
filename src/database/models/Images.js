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
        tableName: 'images_product',
        timestamps: false
    };

    const Image = sequelize.define(alias, cols, config);

    
    return Image;
}