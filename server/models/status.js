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
  Status.associate = function (models) {
    Status.belongsTo(models.order);
  };
  return Status;
};
