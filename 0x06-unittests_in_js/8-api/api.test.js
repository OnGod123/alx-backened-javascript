const request = require('supertest');
const app = require('./api');  // Import the app for testing

describe('GET /cart/:id', () => {
  it('should return status code 200 when :id is a number', async () => {
    const response = await request(app).get('/cart/123');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Payment methods for cart 123');
  });

  it('should return status code 404 when :id is not a number', async () => {
    const response = await request(app).get('/cart/abc');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not a valid cart ID');
  });

  it('should return status code 404 when :id is an empty string', async () => {
    const response = await request(app).get('/cart/');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not a valid cart ID');
  });

  it('should return status code 404 when :id is a special character', async () => {
    const response = await request(app).get('/cart/@#$');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not a valid cart ID');
  });
});

