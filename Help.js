TheWalkingLady.Help = function (game) {};

function gotoMenu() {
	this.state.start('MainMenu');
	console.log('start main menu state');
}

TheWalkingLady.Help.prototype = {
	create: function () {
		this.stage.backgroundColor = '#ffedb7';
		
		//  Add buttons
		var backButton = this.add.sprite(100, 100, 'gotoMenuBtn');
		backButton.inputEnabled = true;
		backButton.events.onInputDown.add(gotoMenu, this);
	}
};
