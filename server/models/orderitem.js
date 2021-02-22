
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
    order_numberId: DataTypes.INTEGER,
    menu_itemId: DataTypes.INTEGER
  },
  {
    underscored: false
  });
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.order, { targetKey: 'id', foreignKey: 'order_numberId' });
    // OrderItem.belongsTo(models.menuItem);
  };
  return OrderItem;
};
