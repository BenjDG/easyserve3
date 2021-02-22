module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('menuItem', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL(19, 4)
  },
  {
    underscored: false
  });
  MenuItem.associate = function (models) {
    MenuItem.hasMany(models.orderItem, { targetKey: 'menu_itemId', foreignKey: 'id' });
  };
  return MenuItem;
};
