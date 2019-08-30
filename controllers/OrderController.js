'use strict'

const { User, Order, Product, OrderProduct } = require('../models')

class OrderController {
  // Waktu create Order -> chaining check stock & update si stock (pakai Hook: beforeUpdate), Product create Order, create OrderProduct, 
  static showOrderForm(req, res) {
    const promises = [User.findOne({
      where: {
        email: req.session.email
      }
    }), Product.findAll()]
    Promise.all(promises)
      .then((result) => {
        // res.send(result)
        res.render('createOrder', { UserId: result[0].id, products: result[1] })
      }).catch((err) => {
        res.send(err)
      })
  }

  static create(req, res) {
    // res.send(req.body)
    let OrderId = null
    Order.create({ UserId: req.body.UserId })
      .then((order) => {
        const orderProductData = []
        OrderId = order.id
        for (let key in req.body) {
          if (key !== 'UserId') {
            if (Number(req.body[key]) > 0 || req.body[key] !== '') {
              const data = {
                OrderId,
                ProductId: Number(key),
                quantity: req.body[key]
              }
              orderProductData.push(data)
            }
          }
        }
        return OrderProduct.bulkCreate(orderProductData)
      })
      .then((orderProducts) => {
        // res.send(orderProducts)
        const promises = [User.findByPk(req.body.UserId), OrderProduct.findAll({
          where: {
            OrderId
          },
          include: [{ model: Product }],
          order: [['id', 'ASC']]
        })]
        return Promise.all(promises)
      })
      .then((result) => {
        //res.send(result)
        res.render('orderConfirmation', { name: result[0].name, products: result[1] })
      })
      .catch((err) => {
        res.send(err)
      })
  }

  static showOrderInformation(req, res) {
    // console.log(req.params.id)
    User.findOne({ where: { email: req.session.email } })
      .then((user) => {
        // console.log(user)
        return Order.findAll({ where: { UserId: user.id }, include: [OrderProduct, Product] })
      }).then((orders) => {
        console.log(orders)
        //res.send(orders)
        res.render('viewOrder', { orders })
      }).catch((err) => {
        res.send(err)
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
