const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      
    },
    releaseDate: {
      type: DataTypes.JSON,
      defaultValue: DataTypes.NOW
    },
    rating: {
      type: DataTypes.INTEGER
    },
    platforms: {
      type: DataTypes.JSON
    },
    image: {
      type: DataTypes.STRING
    }
  });
};
