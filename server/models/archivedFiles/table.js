module.exports = function (sequelize, DataTypes) {
  const Table = sequelize.define('Table', {
    // The email cannot be null, and must be a proper email before creation
    tableNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    drinks: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The password cannot be null
    sides: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The password cannot be null
    icecream: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Table.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Table.hasMany(models.Hotdog, {
      onDelete: 'cascade'
    });
  };

  return Table;
};
