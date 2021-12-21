const { DataTypes } = require('sequelize');
module.exports = (Sequelize) => {
    //modelo tipo dieta
    Sequelize.define('diet', {
        Id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false }
    )
}