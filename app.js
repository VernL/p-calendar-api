const express = require('express')
const bodyParser = require('body-parser')

const events = require('./routes/events')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', events)

module.exports = app
