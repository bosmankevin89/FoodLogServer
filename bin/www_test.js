
//Setup Dependencies
const app = require('../server');
const http = require('http');
const models = require('../models');
const sampleData = require('../test/create_data.js'); //FOR TESTING ONLY.

//Set port
var port = '3000';
app.set('port', port);

//Create Server
var server = http.createServer(app);


//Initialize Database
//db.sequelize.sync();
//TESTING ONLY: this will drop the table first and re-create it afterwards
models.sequelize.sync({force:true}).then(function () {
  
  //sampleData.initSampleData(); //TESTING

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
});