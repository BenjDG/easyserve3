module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    employeeId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  });
  return order;
};
