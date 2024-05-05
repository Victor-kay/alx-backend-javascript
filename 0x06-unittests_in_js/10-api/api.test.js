const request = require('supertest');
const app = require('./api');

describe('GET /available_payments', () => {
  it('responds with correct payment methods', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
      .end(done);
  });
});

describe('POST /login', () => {
  it('responds with a welcome message', (done) => {
    const username = 'Betty';
    request(app)
      .post('/login')
      .send({ userName: username })
      .expect(200)
      .expect(`Welcome ${username}`)
      .end(done);
  });
});
