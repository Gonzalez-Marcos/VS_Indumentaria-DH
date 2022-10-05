module.exports = (sequelize, dataTypes) => {
    const alias = "Category";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
       

    };
    
    const config = {
        tableName: 'categories',
        timestamps: false
    };

    const category = sequelize.define(alias, cols, config);

    category.associate = (models) => {

        category.hasMany(models.Product, {
            as: "productos",
            foreingKey: "category_id"
        })
    }

    return category;
}