module.exports = (sequelize, DataTypes) => {
  const orderItem = sequelize.define('orderItem', {
    employeeId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  },
  {
    underscored: false
  });
  return orderItem;
};
