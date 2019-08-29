'use strict'

const { Order, Product, OrderProduct } = require('../models')

class OrderController {
  static showOrderPage(req, res) {
  }

  // Waktu reate Order -> chaining check stock & update si stock (pakai Hook: beforeUpdate), Product create Order, create OrderProduct, 
  static showOrderForm(req, res) {
    res.render('createOrder')
  }

  static create(req, res) {
    Product.findAll({
      where: {
        [Op.or]: {
          id: req.body.
        }
      }
    })

    // Create Order based on UserId
    let OrderId = null
    Order.create({ UserId: req.body.UserId })
      .then((result) => {
        OrderId = result.id
        // res.send(result)
        // Create OrderProduct -> plain, choco, straw
        if (req.body.plainQty > 0) {
          const data = {
            OrderId: OrderId,
            ProductId: 1,
            quantity: req.body.plainQty
          }
          return OrderProduct.create(data)
        }
      })
      .then(() => {
        if (req.body.chocolateQty > 0) {
          const data = {
            OrderId: OrderId,
            ProductId: 2,
            quantity: req.body.chocolateQty
          }
          return OrderProduct.create(data)
        }
      })
      .then(() => {
        if (req.body.strawberryQty > 0) {
          const data = {
            OrderId: OrderId,
            ProductId: 3,
            quantity: req.body.straberryQty
          }
          return OrderProduct.create(data)
        }
      })
      .catch((err) => {
        // console.log(err)
        res.render('errors', { err })
      })
  }

  static showOrderInformation(req, res) {
    // console.log(req.params.id)
    Order.findByPk(req.params.id)
      .then((order) => {
        // console.log(order)
        res.render('orderInformation', { order })
      }).catch((err) => {
        res.render('errors', { err })
      })
  }

  static showFindOrder(req, res) {
    res.render('findOrder')
  }

  static edit(req, res) {
    Order.findByPk(req.params.id)
      .then((order) => {
        res.render('orders/update', { order })
      }).catch((err) => {
        res.render('errors', { err })
      })
  }

  static update(req, res) {
    Order.update(req.body, { where: { id: req.params.id } })
      .then((result) => {
        res.redirect(`/orders/orderinformation/${result.id}`)
      }).catch((err) => {
        res.render('errors', { err })
      })
  }

  static remove(req, res) {
    Order.destroy({ where: { id: req.params.id } })
      .then((result) => {
        res.redirect('/orders/delete')
      }).catch((err) => {
        res.render('errors', { err })
      })
  }
}

module.exports = OrderController
