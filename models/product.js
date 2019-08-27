'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequel.Model

  class Product extends Model {
    static associate (models) {
      Product.hasMany(models.OrderProduct)
    }
  }

  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, { sequelize })

  return Product
}
