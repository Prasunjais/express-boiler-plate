process.env.NODE_ENV = 'test';

const {
  join
} = require('path');
require('dotenv').config({
  path: join(__dirname, '.env')
})

let userAuth = require('../App/Models/UserAuthModel')

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = "http://localhost:2001/v1";
let token = process.env.TOKEN;
let should = chai.should();
const {
  expect
} = chai;

chai.use(chaiHttp);
//Our parent block
describe('UserAuth', () => {
  describe('/GET user auth details', () => {
    it('it should GET all the user auth details', (done) => {
      chai.request(server)
        .get('/user/auth?userId=1')
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('User auth details.')
          res.body.should.have.property('data').be.a('array')
          done();
        });
    });
  });
});
