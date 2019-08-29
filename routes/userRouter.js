'use strict'

const express = require('express')
const router = express.Router()
const { UserController } = require('../controllers')

router.get('/login', UserController.showLoginForm)
router.post('/login', UserController.login)
router.get('/register', UserController.showRegisterForm)
router.post('/register', UserController.register)
router.get('/action', UserController.action)
module.exports = router
