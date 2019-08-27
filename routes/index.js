'use strict'

const router = require('express').Router()
const order = require('./orderRouter')
// const stock = require('./stockRouter')

router.use('/orders', order)
// router.use('/stocks', stock)

// Home page
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
