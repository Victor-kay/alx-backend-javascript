// 5-payment.test.js

const chai = require('chai.cjs');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('sendPaymentRequestToAPI', function() {
    let consoleSpy;

    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        consoleSpy.restore();
    });

    it('should log correct total for 100 and 20', function() {
        sendPaymentRequestToAPI(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log correct total for 10 and 10', function() {
        sendPaymentRequestToAPI(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
});
