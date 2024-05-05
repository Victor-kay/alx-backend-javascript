const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let stub;

    beforeEach(function () {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(function () {
        stub.restore();
    });

    it('should call Utils.calculateNumber with type = SUM, a = 100, and b = 20', function () {
        sendPaymentRequestToApi(100, 20);
        chai.expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log "The total is: 10" to the console', function () {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        chai.expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
        consoleSpy.restore();
    });
});
