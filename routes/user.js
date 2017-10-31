var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/retrieve', function (req, res) {
    res.send('Retrieving Users!');

    models.user.findAll().then(function(users){
        console.log('HERE!');
    });

});
