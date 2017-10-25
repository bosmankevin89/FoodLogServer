/*
  server.js 
  -----------------------

    This files is the main script that will be run.

*/

const path = require("path");
const express = require('express');
const app = express();

const db = require('./app/models/index.js'); //FOR TESTING ONLY.


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

//console.log(__dirname);
//console.log(path.join(__dirname, 'config', 'config.json'));


module.exports = app;