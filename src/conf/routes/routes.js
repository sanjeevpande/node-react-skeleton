var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var appController = require('../../controllers/application/app-controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	appController.serveIndex(req, res, next);
});

module.exports = router;
