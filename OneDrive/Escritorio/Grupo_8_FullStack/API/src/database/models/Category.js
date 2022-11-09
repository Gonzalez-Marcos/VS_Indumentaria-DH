module.exports = (sequelize, dataTypes) => {
    const alias = "Category";

    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
       

    };
    
    const config = {
        tableName: 'categories',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {

        Category.hasMany(models.Product, {
            as: "products",
            foreingKey: "CategoryId"
        });
    }

    return Category;
}