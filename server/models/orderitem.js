module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
    employeeId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  },
  {
    underscored: false
  });
  return OrderItem;
};
