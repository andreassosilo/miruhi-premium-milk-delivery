'use strict'

const { User } = require('../models')
const encryption = require('../helpers/encryption')

class UserController {
  static showLoginForm(req, res) {
    const error = req.query.errormessage
    res.render('login', { error })
  }

  static login(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (encryption.compare(req.body.password, user.password)) {
          req.session.email = user.email
          res.redirect(`/users/dashboard`)
        } else {
          res.redirect('/login')
        }
      })
      .catch((err) => {
        res.send(err)
      })
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

  static dashboard(req, res) {
    res.render('dashboard')
  }

  static logout(req, res) {
    req.session.destroy(function (err) {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/')
      }
    })
  }
}

module.exports = UserController