const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');

describe('Index page', () => {
  before((done) => {
    server.on('listening', () => {
      done();
    });
  });

  after(() => {
    server.close();
  });

  it('Test for GET / exists', (done) => {
    request('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Test for GET / returns “Welcome to the payment system” exists', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
