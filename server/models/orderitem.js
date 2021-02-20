
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
    order_numberId: DataTypes.INTEGER,
    menu_itemId: DataTypes.INTEGER
  },
  {
    underscored: false
  });
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.order);
    OrderItem.belongsTo(models.menuItem);
  };
  return OrderItem;
};
