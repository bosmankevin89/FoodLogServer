/*
  server.js 
  -----------------------

    This files is the main script that will be run.

*/

//Core Modules
const path = require("path");
const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const auth0_config = require(path.join(__dirname, 'config', 'auth0.json'));

//Declare main app
const app = express();

//Route Modules
var routes = require('./routes/index');
var user  = require('./routes/user');

//TODO Enable CORS?

//Define Auth0 Authentication
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: auth0_config.cache,
      rateLimit: auth0_config.rateLimit,
      jwksRequestsPerMinute: auth0_config.jwksRequestsPerMinute,
      jwksUri: auth0_config.jwksUri
  }),
  audience: auth0_config.audience,
  issuer: auth0_config.issuer,
  algorithms: [auth0_config.algorithms]
});

//Add Authentication function
app.use(jwtCheck);


//Define Routes
app.use('/', routes);
app.use('/user', user);



// Catch 404 errors
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Add special unauthorized error.
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({message:'Unauthorized to view page'});
  }
});

// Error handler
// TODO: no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err  //error: (app.get('env') === 'development') ? err : {}
  });
});



module.exports = app;