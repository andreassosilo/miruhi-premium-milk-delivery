'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User)
      Order.hasMany(models.OrderProduct)
      Order.belongsToMany(models.Product, { through: models.OrderProduct })
    }
  }

  Order.init({
    UserId: DataTypes.INTEGER
  }, {
      hooks: {
        // Create order -> Create OrderProduct (BulkInsert) + Promise.all -> redirect

        // Di controller Order -> hanya create saja, read all yang sudah dipopulate (dikumpulin dengan include)
        //Update :
        // 1. Find OrderId
        // CRUD di OrderProduct saja --> buat controller OrderProduct
        // 2. Update OrderProduct -> update Product

        // Delete:
        // Find OrderProductId -> delete hanya OrderProduct saja -> Update Product.stock
        // beforeDelete atau beforeBulkDelete -> when we delete the orders

        // MVP (Filter by / Nodemailer)
      }, sequelize
    })

  return Order
}
