module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    pin: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL
  });

  Employee.associate = function (models) {
    Employee.hasMany(models.order, {
      targetKey: 'employeeId',
      foreignKey: 'id'
    });
  };
  return Employee;
};
