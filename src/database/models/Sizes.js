module.exports = (sequelize, dataTypes) => {
    const alias = "Size";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sizes: {
            type: dataTypes.STRING(100),
            allowNull: false
        }

    };
    
    const config = {
        tableName: 'sizes',
        timestamps: false
    };

    const Size = sequelize.define(alias, cols, config);

    
    return Size;
}