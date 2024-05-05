// 3-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log the result', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;

    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
