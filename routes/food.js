
const express = require('express');
const router = express.Router();
const models = require('../models');

//TESTING ONLY
/*********************************************************
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
*********************************************************/


// TEST ROUTE
router.get('/whoami', function (req, res) {
    res.json(req.user);
})


//Route Tasks (TODO: Complete)
router.post('/create', function (req, res) {
    res.send('User create!');
/*
    models.user.create({
        user_uuid: uuidv4(),
        display_name: req.body.display_name,
        google_id: req.body.google_id
    }).then(function () {
        //res.redirect('/');
        res.status(200).send('Success')
    });
*/
});


router.get('/destroy', function (req, res) {
    res.send('User create!');
});



/*************************
    Export Module
*************************/
module.exports = router;