'use strict'
// Miruhi - Premium Milk at Your Door
// Created by Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Library
const express = require('express')
const router = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

// EJS configuration
app.set('view engine', 'ejs')

// Basic routing (GET & POST)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Load router module on the app
app.use('/', router)

// Using app.use to serve up static CSS files in public/assets folder
app.use('/public', express.static('public'))

// Start the server
app.listen(PORT)
console.log(`Magic happens on port ${PORT}!`)
