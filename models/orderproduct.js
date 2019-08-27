'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class OrderProduct extends Model {
    static associate (models) {
      OrderProduct.belongsTo(models.Order)
      OrderProduct.belongsTo(models.Product)
    }
  }

  OrderProduct.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, { sequelize })

  return OrderProduct
}
