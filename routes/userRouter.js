'use strict'

const express = require('express')
const router = express.Router()
const { UserController } = require('../controllers')
const isLogin = require('../middlewares/isLogin')

// Router logout
router.get('/logout', UserController.logout)

// Router dashboard
router.get('/dashboard', isLogin, UserController.dashboard)

module.exports = router
