module.exports = (sequelize, DataTypes) => {
  const menuItem = sequelize.define('menuItem', {
    title: DataTypes.STRING,
    price: DataTypes.DECIMAL(19, 4)
  },
  {
    underscored: false
  });
  return menuItem;
};
