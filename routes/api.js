/**
 * Created by New User on 4/20/2016.
 */
var express = require('express');
var router = express.Router();

var Project = require('../models/project');
Project.methods(['get', 'put', 'post', 'delete']);
Project.register( router, '/projects');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('API base response is working');
});

// Return router
module.exports = router;