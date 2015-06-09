TheWalkingLady.Help = function (game) {};

function gotoMenu() {
	//  Start the MainMenu state
	this.state.start('MainMenu');
}

TheWalkingLady.Help.prototype = {
	create: function () {
		//  Set the screen background color
		this.stage.backgroundColor = '#ffedb7';
		
		//  Add the back button
		var backButton = this.add.sprite(100, 100, 'gotoMenuBtn');
		//  Make it clickable
		backButton.inputEnabled = true;
		//  Make it so when you click on it, it runs the gotoMenu function
		backButton.events.onInputDown.add(gotoMenu, this);
	}
};
