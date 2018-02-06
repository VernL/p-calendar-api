const express = require('express');
const router = express.Router();

//list
router.get('/', function(req, res, next) {
  res.send('This will be used to list all events');
});

//add
router.post('/', function(req, res, next) {
  res.send('This will be used to add a new event');
});

//view
router.get('/:id', function(req, res, next) {
  res.send('This will be used to view a specific event');
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
