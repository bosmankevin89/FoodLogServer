/*
  server.js 
  -----------------------

    This files is the main script that will be run.

*/

//Core Modules
const path = require("path");
const express = require('express');
const app = express();

//Route Modules
var routes = require('./routes/index');
var users  = require('./routes/users');
  
//Define Routes
app.use('/', routes);
app.use('/users', users);

module.exports = app;