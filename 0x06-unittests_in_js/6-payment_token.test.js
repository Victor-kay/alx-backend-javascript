const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response from the API when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error); // Call done with an error if the promise is rejected
            });
    });

    // Add more test cases as needed
});
