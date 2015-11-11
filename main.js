(function () {	

	'use strict';

	var app = require('app');
	var BrowserWindow = require('browser-window');
	var applicationMenu = require('./src/application-menu');

	var mainWindows = null;

	app.on('ready', function () {
		applicationMenu.setup();

		mainWindows = new BrowserWindow({
			width: 900,
			height: 700,
			center: true,
			resizable: true
		});
	
		mainWindows.loadUrl('file://' + __dirname + '/index.html');
		
	});
})();
