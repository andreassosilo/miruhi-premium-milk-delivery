'use strict'

const router = require('express').Router()
const { StockController } = require('../controllers')

router.get('/', function (req, res) {
  res.send('Stock Page')
})

module.export = router
