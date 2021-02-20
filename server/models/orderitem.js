
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
    order_numberId: DataTypes.INTEGER,
    order_itemId: DataTypes.INTEGER
  },
  {
    underscored: false
  });
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.order);
  };
  return OrderItem;
};
