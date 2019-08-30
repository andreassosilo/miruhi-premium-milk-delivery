'use strict'

const express = require('express')
const router = express.Router()
const { OrderController } = require('../controllers')
const isLogin = require('../middlewares/isLogin')

router.get('/create', isLogin, OrderController.showOrderForm)
router.post('/create', isLogin, OrderController.create)
// router.get('/update', OrderController.showUpdateForm)
// router.post('/update', OrderController.updateOrder)
router.get('/view', isLogin, OrderController.showOrderInformation)
router.get('/find', OrderController.showFindOrder)

module.exports = router
