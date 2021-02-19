module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
    order_number: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  },
  {
    underscored: false
  });
  return OrderItem;
};
