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
      allowNull: false,
      
    },
    releaseDate: {
      type: DataTypes.JSON,
      defaultValue: DataTypes.NOW
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    platforms: {
      type: DataTypes.JSON
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://yt3.ggpht.com/-Uy4bgty3baUAL3wLTHKtMx99pnG-zIJ5idP0tiaflY4LksiORLHtLCf8O8tzg3i-JExYjHM=s900-c-k-c0x00ffffff-no-rj"
    }
  });
};
