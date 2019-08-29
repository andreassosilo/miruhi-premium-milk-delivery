'use strict'

const express = require('express')
const router = express.Router()
const order = require('./orderRouter')
const user = require('./userRouter')

router.use('/orders', order)
router.use('/users', user)

// Home page
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
