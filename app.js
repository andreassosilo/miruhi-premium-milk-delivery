'use strict'
// Miruhi - Premium Milk at Your Door
// Created by Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Library (dependencies)
const express = require('express')
const router = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000
const session = require('express-session')
const addCurrency = require('./helpers/addCurrency')
const nodemailer = require('nodemailer')

// EJS configuration
app.set('view engine', 'ejs')

// Express-session
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

// Express middleware that allows POST-ing data
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Load router module on the app
app.use('/', router)

// Using app.use to serve up static CSS files in public/assets folder
app.use('/public', express.static('public'))

// Add helpers
app.locals.addCurrency = addCurrency

// Start the server
app.listen(PORT, () => console.log(`Magic happens on port ${PORT}!`))
