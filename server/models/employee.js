module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    pin: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL
  });
  return employee;
};
