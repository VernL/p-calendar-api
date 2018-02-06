const uuidv4 = require('uuid/v4')

class Event {
  constructor (title, patientName, duration) {
    this.id = uuidv4()
    this.createdDate = new Date()
    this.title = title
    this.patientName = patientName
    this.duration = duration
  }
}

module.exports = Event