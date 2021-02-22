
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    employeeId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  });

  Order.associate = function (models) {
    Order.hasMany(models.orderItem, { sourceKey: 'id', foreignKey: 'order_numberId' });
    Order.belongsTo(models.status);
  };
  return Order;
};
