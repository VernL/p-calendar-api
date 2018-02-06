class Event {
  constructor (title, patientName, duration) {
    this.createdDate = new Date()
    this.title = title
    this.patientName = patientName
    this.duration = duration
  }
}

module.exports = Event