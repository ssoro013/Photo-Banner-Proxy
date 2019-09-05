const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const db = require('../database/index.js');
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname,  '../public')));
app.use('/:restaurantName/', express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
