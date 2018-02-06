const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const Event = require('../models/event')
const app = require('../app')
let eventDB = require('../models')

chai.use(chaiHttp)

describe('Events', () => {
  describe('/GET', () => {
    it('it should GET all events', () => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
        })
    })
  })
  describe('/POST', () => {
    it('it should automatically generate an ID and createdDate field', () => {
      let event = new Event(
        'Learn to play guitar',
        'Mr Tiny Hands',
        '100'
      )
      chai.request(app)
        .post('/')
        .send(event)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('id').be.a('number')
          res.body.should.have.property('createdData').be.a('string')
        })
    })
  })
})
