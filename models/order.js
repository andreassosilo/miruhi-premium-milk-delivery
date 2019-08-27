'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Order extends Model {
    static associate (models) {
      Order.belongsTo(models.User)
      Order.hasMany(models.OrderProduct)
    }
  }

  Order.init({
    UserId: DataTypes.INTEGER
  }, { sequelize })

  return Order
}
