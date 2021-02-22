module.exports = (sequelize, DataTypes) => {
  const RestTable = sequelize.define('restTable', {
    name: DataTypes.STRING
  },
  {
    timestamps: false,
    underscored: false
  });
  RestTable.associate = function (models) {
    RestTable.hasMany(models.order, { targetKey: 'restTableId', foreignKey: 'id' });
  };
  return RestTable;
};
