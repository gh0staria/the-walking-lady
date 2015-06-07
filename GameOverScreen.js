TheWalkingLady.GameOverScreen = function (game) {};

TheWalkingLady.GameOverScreen.prototype = {
	create: function () {
		this.stage.backgroundColor = '#ffedb7';
		
		//  Add and setup restart button
		var restartButton = this.add.sprite(100, 250, 'restartBtn');
		restartButton.inputEnabled = true;
		restartButton.events.onInputDown.add(function() {
			score = 0;
			this.state.start('Game');
		}, this);
		
		//  Add and setup quit button
		var quitButton = this.add.sprite(100, 360, 'quitBtn');
		quitButton.inputEnabled = true;
		quitButton.events.onInputDown.add(function() {
			this.state.start('MainMenu');
		}, this);
		
		//  Add text to display
		var message1 = this.add.text(100, 100, "GAME OVER!");
		var scoreMessage = this.add.text(100, 125, "Your score was:");
		var scoreDisplay = this.add.text(100, 150, score);
	}
};
