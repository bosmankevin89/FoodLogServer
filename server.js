/*
  server.js 
  -----------------------

    This files is the main script that will be run.

*/

const path = require("path");
const express = require('express');
const app = express();

const db = require('./app/models/index.js'); //FOR TESTING ONLY.
const sampleData = require('./app/data/create_data.js'); //FOR TESTING ONLY.

//Initialize Database
//db.sequelize.sync();
//TESTING ONLY: this will drop the table first and re-create it afterwards
db.sequelize.sync({ force: true }).then(function () {
  
  sampleData.initSampleData();

  app.get('/', function (req, res) {
    res.send('Hello World!')
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
});


module.exports = app;