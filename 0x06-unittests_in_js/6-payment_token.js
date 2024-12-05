function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // Return nothing (undefined) if success is false
}

export { getPaymentTokenFromAPI };

