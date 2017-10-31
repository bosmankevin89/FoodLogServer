
//Setup Dependencies
var app = require('../server');
var http = require('http');
var models = require('../models');


//Set port
var port = '3000';
app.set('port', port);

//Create Server
var server = http.createServer(app);


//Initialize Database
models.sequelize.sync().then(function () {

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
});