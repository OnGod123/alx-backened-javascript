import { expect } from 'chai';
import sinon from 'sinon';
import { sendPaymentRequestToApi } from './4-payment.js';
import { Utils } from './utils.js';

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original implementations
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with type SUM, a = 100, and b = 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10');
  });
});

