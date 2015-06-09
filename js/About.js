TheWalkingLady.About = function (game) {};

function gotoMenu() {
	//  Start the MainMenu state
	this.state.start('MainMenu');
}

TheWalkingLady.About.prototype = {
	create: function () {
		//  Set the screen's background color
		this.stage.backgroundColor = '#ffedb7';
		
		//  Add back button
		var backButton = this.add.sprite(100, 100, 'gotoMenuBtn');
		//  Make it clickable
		backButton.inputEnabled = true;
		//  Make it so when you click on it, it runs the gotoMenu function
		backButton.events.onInputDown.add(gotoMenu, this);
	}
};
