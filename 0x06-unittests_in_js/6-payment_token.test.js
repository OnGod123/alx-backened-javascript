import { getPaymentTokenFromAPI } from './6-payment_token.js';
import { expect } from 'chai';

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct object when success is true', function (done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done(); // Call done to indicate the test is complete
    }).catch((error) => done(error)); // Handle potential errors
  });

  it('should return undefined when success is false', function () {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});


