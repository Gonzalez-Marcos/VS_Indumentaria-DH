module.exports = (sequelize, dataTypes) => {
    const alias = "Image";
    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        ProductId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    const config = {
        tableName: 'images',
        timestamps: false
    };
    const Image = sequelize.define(alias, cols, config);
    Image.associate = (models) => {
        Image.belongsTo(models.Product, {    
            foreignKey: "ProductId",
            as: "product"
        });
    }
    return Image;
}