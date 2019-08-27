'use strict'

const { Order } = require('../models')

class OrderController {
  static showOrderForm (req, res) {
    res.render('createOrder')
  }

  static create (req, res) {
    Order.create(req.body)
      .then((result) => {
        // console.log(result)
        res.redirect(`/orders/orderinformation/${result.id}`)
      }).catch((err) => {
        // console.log(err)
        res.render('errors', { err })
      })
  }

  static showOrderInformation (req, res) {
    // console.log(req.params.id)
    Order.findByPk(req.params.id)
      .then((order) => {
        // console.log(order)
        res.render('orderInformation', { order })
      }).catch((err) => {
        res.render('errors', { err })
      })
  }

  static showFindOrder (req, res) {
    res.render('findOrder')
  }

  static edit (req, res) {
    Order.findByPk(req.params.id)
      .then((order) => {
        res.render('orders/update', { order })
      }).catch((err) => {
        res.render('errors', { err })
      })
  }

  static update (req, res) {
    Order.update(req.body, { where: { id: req.params.id } })
      .then((result) => {
        res.redirect(`/orders/orderinformation/${result.id}`)
      }).catch((err) => {
        res.render('errors', { err })
      })
  }

  static remove (req, res) {
    Order.destroy({ where: { id: req.params.id } })
      .then((result) => {
        res.redirect('/orders/delete')
      }).catch((err) => {
        res.render('errors', { err })
      })
  }
}

module.exports = OrderController
