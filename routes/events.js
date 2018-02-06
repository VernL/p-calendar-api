const express = require('express');
const Event = require('../models/events');
const router = express.Router();

const events = [];

//list
router.get('/', function(req, res, next) {
  res.json(events);
});

//add
router.post('/', function(req, res, next) {
  let event = new Event(
    req.body.title,
    req.body.patientName,
    req.body.duration
  );
  events.push(event);
  console.log('New event added!');
  res.json(event);
});

//view
router.get('/:id', function(req, res, next) {
  let event = events.find(event => event.id === req.params.id);
  if(event){
    res.json(event);
  } else {
    console.log('Event not found!');
    res.sendStatus(404);
  }
});

//edit
router.put('/:id', function(req, res, next) {
  res.send('This will be used to edit an event');
});

//remove
router.delete('/:id', function(req, res, next) {
  res.send('This will be used to remove an event');
});

module.exports = router;
