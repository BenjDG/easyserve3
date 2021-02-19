module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    employeeId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  });
  return Order;
};
