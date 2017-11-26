
const express = require('express');
const router = express.Router();
const models = require('../models');


//Route Tasks (TODO: Complete)
router.post('/create', function (req, res) {
    res.send('Food Log Entry create!');
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