module.exports = (sequelize, dataTypes) => {
    const alias = "Category";

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
        tableName: 'categories',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {

        Category.belongsTo(models.Product, {
            as: "productos",
            foreingKey: "categories_id"
        })
    }

    return Category;
}