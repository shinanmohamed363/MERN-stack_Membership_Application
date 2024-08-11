// backend/api/index.js

const express = require('express');
const app = express();

// Add your routes and middleware here

app.get('/', (req, res) => {
  res.send('Express on Vercel');
});

// Export the app module
module.exports = app;