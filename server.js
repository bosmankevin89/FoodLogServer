/*
  server.js 
  -----------------------

    This files is the main script that will be run.

*/

const path = require("path");
const express = require('express');
const app = express();

  
app.get('/', function (req, res) {
  res.send('Hello World!')
});


module.exports = app;