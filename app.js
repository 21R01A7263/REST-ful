const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('http://localhost:3000');
  res.status(200).json({
    id : Math.floor(Math.random() * 6969),
    message: 'It works!'
  });
});

module.exports = app;