'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class OrderProduct extends Model {
    // Class method to get the sub-total price
    get subtotal() {
      return this.quantity * this.Product.price;
    }
    // Associations
    static associate(models) {
      OrderProduct.belongsTo(models.Order)
      OrderProduct.belongsTo(models.Product)
    }
  }

  OrderProduct.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
      hooks: {
        afterBulkCreate: (orderProducts) => {
          // Check if the stock is still available
          // this.associations.Product.target.update({})
        }
      },
      sequelize
    })

  return OrderProduct
}
