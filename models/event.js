const uuidv4 = require('uuid/v4');
const moment = require('moment')

moment().format()

class Event {
  constructor (title, patientName, duration) {
    this.id = uuidv4()
    this.createdDate = moment()
    this.title = title
    this.patientName = patientName
    this.duration = duration
    this.completionDate = moment(this.createdDate).add(this.duration, 'days').format('LLLL')
  }
}

module.exports = Event;