'use strict'

const { User } = require('../models')

class UserController {
  static showLoginForm(req, res) {
    const error = req.query.errormessage
    res.render('login', { error })
  }

  static login(req, res) {
    res.redirect('/users/action')
  }

  static showRegisterForm(req, res) {
    const error = req.query.errormessage
    res.render('register', { error: undefined, user: undefined })
  }

  static register(req, res) {
    const user = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address
    }
    User.create(user)
      .then((result) => {
        res.send(result)
      }).catch((err) => {
        res.render('register', { error: err.message, user })
      });

  }

  static action(req, res) {
    res.render('action')
  }
}

module.exports = UserController