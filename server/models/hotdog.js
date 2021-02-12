// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// Creating our Hotdog Menu and Options
module.exports = function (sequelize, DataTypes) {
  const Hotdog = sequelize.define('Hotdog', {
    hotdogName: {
      type: DataTypes.STRING
    },
    bun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        isBoolean: true
      }
    },
    toppings: {
      type: DataTypes.BOOLEAN,
      default: 1,
      allowNull: false
    },
    meat: {
      type: DataTypes.BOOLEAN,
      default: 1,
      allowNull: false
    },
    sauce: {
      type: DataTypes.BOOLEAN,
      defautl: 1,
      allowNull: false
    }
  });
  Hotdog.associate = function (models) {
    Hotdog.belongsTo(models.Table, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Hotdog;
};
