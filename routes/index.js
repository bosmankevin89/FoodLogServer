//Variables
var express = require('express');
var router = express.Router();

//Create Routes
router.get('/', function (req, res) {
    res.send('Hello World!')
});


module.exports = router;