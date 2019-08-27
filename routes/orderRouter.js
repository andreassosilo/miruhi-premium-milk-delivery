'use strict'

const express = require('express')
const router = express.Router()
const { OrderController } = require('../controllers')

router.get('/create', OrderController.showOrderForm)
router.post('/create', OrderController.create)
router.get('/orderinformation/:id', OrderController.showOrderInformation)
router.get('/find', OrderController.showFindOrder)

module.exports = router
