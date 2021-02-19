module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('status', {
    statusId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING
  },
  {
    timestamps: false
  });
  return Status;
};
