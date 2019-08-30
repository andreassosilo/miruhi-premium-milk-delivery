'use strict'

const express = require('express')
const router = express.Router()
const order = require('./orderRouter')
const user = require('./userRouter')
const { UserController } = require('../controllers')
router.use('/orders', order)
router.use('/users', user)

// Home page (Miruhi Premium Milk Delivery)
router.get('/', (req, res) => {
  res.render('index')
})

// Router login
router.get('/login', UserController.showLoginForm)
router.post('/login', UserController.login)
router.get('/register', UserController.showRegisterForm)
router.post('/register', UserController.register)

module.exports = router
