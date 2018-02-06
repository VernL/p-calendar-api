const express = require('express')
const Event = require('../models/event')
const router = express.Router()
const eventsDB = require('../models')

// list
router.get('/', function (req, res, next) {
  res.json(eventsDB)
})

// add
router.post('/', function (req, res, next) {
  let event = new Event(
    req.body.title,
    req.body.patientName,
    req.body.duration
  )
  eventsDB.push(event)
  console.log('New event added!')
  res.json(event)
})

// view
router.get('/:id', function (req, res, next) {
  let event = eventsDB.find(event => event.id === req.params.id)
  if (!event) {
    console.log('Event not found!')
    res.sendStatus(404)
  } else {
    res.json(event)
  }
})

// edit
router.put('/:id', function (req, res, next) {
  let index = eventsDB.findIndex(event => event.id === req.params.id)
  if (index === -1) {
    console.log('Event not found!')
    res.sendStatus(404)
  } else {
    eventsDB[index] = {...eventsDB[index], ...req.body}
    res.json(eventsDB[index])
  }
})

// remove
router.delete('/:id', function (req, res, next) {
  let index = eventsDB.findIndex(event => event.id === req.params.id)
  if (index === -1) {
    console.log('Event not found!')
    res.sendStatus(404)
  } else {
    eventsDB.splice(index, 1)
    res.json(eventsDB)
  }
})

module.exports = router
