// 3-payment.test.js

const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the sum', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(150);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 50);

    chai.expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 50)).to.be.true;
    chai.expect(consoleLogSpy.calledOnceWithExactly('The total is: 150')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
