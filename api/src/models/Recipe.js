const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    step: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    { timestamps: false }
  );
};
