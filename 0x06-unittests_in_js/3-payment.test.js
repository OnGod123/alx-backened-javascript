
import { sendPaymentRequestToApi } from './3-payment.js';  // Import the function to be tested
import { Utils } from './utils.js';  // Import the Utils module
import sinon from 'sinon';  // Import Sinon for spying

describe('sendPaymentRequestToApi', function() {
  let spy;

  // "before each" hook
  beforeEach(function() {
    spy = sinon.spy(Utils, 'calculateNumber');  // Create the spy on the Utils.calculateNumber function
  });

  // "after each" hook
  afterEach(function() {
    spy.restore();  // Restore the spy after each test to avoid affecting other tests
  });

  it('should call Utils.calculateNumber with SUM type and correct arguments', function() {
    sendPaymentRequestToApi(100, 20);  // Call the function under test
    sinon.assert.calledOnce(spy);  // Assert that the function was called once
    sinon.assert.calledWith(spy, 'SUM', 100, 20);  // Assert that the spy was called with correct arguments
  });
});

