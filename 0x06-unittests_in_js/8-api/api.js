const express = require('express');
const app = express();
const port = 7865;

// Existing endpoint example
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Add new GET /cart/:id endpoint
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  // Validate that :id is a number
  if (isNaN(id)) {
    return res.status(404).send('Not a valid cart ID');
  }

  // If valid, return payment methods for the cart
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Export app for testing
module.exports = app;

