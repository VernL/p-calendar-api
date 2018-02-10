const uuidv4 = require('uuid/v4')
const moment = require('moment')


class Event {
  constructor (title, patientName, eventStartDate, eventEndDate) {
    this.id = uuidv4()
    this.title = title
    this.patientName = patientName
    this.eventStartDate = moment(eventStartDate, 'YYYY-MM-DD', true)
    this.eventEndDate = moment(eventEndDate, 'YYYY-MM-DD', true)
  }
}

module.exports = Event
