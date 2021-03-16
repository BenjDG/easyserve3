module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('status', {
    name: DataTypes.STRING
  },
  {
    timestamps: false
  });
  Status.associate = function (models) {
    Status.hasMany(models.order, { sourceKey: 'id', foreignKey: 'statusId' });
  };
  return Status;
};
