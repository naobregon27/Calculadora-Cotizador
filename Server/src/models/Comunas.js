const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comunas",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      comuna: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      generacion: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      costocombustiblepeaje: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      valorventaenergia: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
