'use strict';

var path = require('path');

var appController = {
	
	serveIndex: function(req, res, next){
		var indexFile = path.join(__dirname, '../../../views/index.html');
		res.sendFile(indexFile);
	}
}

module.exports = appController;