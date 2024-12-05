import sinon from 'sinon';
import { expect } from 'chai';
import { sendPaymentRequestToApi } from './5-payment.js';

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  // "before each" hook to create the spy on console.log
  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // "after each" hook to restore the original console.log
  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called once
    sinon.assert.calledOnce(consoleLogSpy);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called once
    sinon.assert.calledOnce(consoleLogSpy);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
  });
});

