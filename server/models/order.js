
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    employeeId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  });

  Order.associate = function (models) {
    Order.hasMany(models.orderItem, { foreignKey: 'order_numberId' });
    Order.hasOne(models.status);
  };
  return Order;
};
