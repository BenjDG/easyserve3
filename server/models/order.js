
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    userId: DataTypes.INTEGER,
    restTableId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    total: DataTypes.DECIMAL(19, 4),
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: '0'
    }
  });

  Order.associate = function (models) {
    Order.hasMany(models.orderItem, { sourceKey: 'id', foreignKey: 'order_numberId' });
    Order.belongsTo(models.status);
    Order.belongsTo(models.restTable);
    Order.belongsTo(models.user);
  };
  return Order;
};
