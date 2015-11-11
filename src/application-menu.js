'use strict';

var app, Menu, ApplicationMenu;

app = require('app');
Menu = require('menu');

ApplicationMenu = function() {};

ApplicationMenu.prototype.setup = function () {
	
	var mainMenu = Menu.buildFromTemplate([{
		label: 'Demo Electron Menu Basic',
		submenu: [
			{label: 'Preferences'},
			{label: 'Quit', click: function () { app.quit(); }}
		]
	}]);

	app.setApplicationMenu(mainMenu);

}

module.exports = new ApplicationMenu();
