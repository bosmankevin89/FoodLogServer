
const express = require('express');
const router = express.Router();
const models = require('../models');

//Testing!!!
router.get('/retrieve_all', function (req, res) {
    res.send('Retrieving Users!');

    /*    
        models.user.findAll().then(function(users){
            //users.map(user => console.log(user));
            users.map(function(user){
                console.log('--------------------------');
                console.log(user.user_uuid);
                console.log(user.display_name);
                console.log(user.google_id);
                console.log('--------------------------');
            });
        });
    */

    models.user.find().then(function (user) {
        console.log('--------------------------');
        console.log(user.user_uuid);
        console.log(user.display_name);
        console.log(user.google_id);
        console.log('--------------------------');
    });

});


router.get('/retrieve', function (req, res) {
    //res.send('Retrieving Users!');

    models.user.find().then(function (user) {

        var userJSON = {};

        userJSON.user_uuid = user.user_uuid;
        userJSON.display_name = user.display_name;
        userJSON.google_id = user.google_id;

        console.log('--------------------------');
        console.log(userJSON);
        console.log('--------------------------');
        
        res.json(userJSON);
    });

});


module.exports = router;