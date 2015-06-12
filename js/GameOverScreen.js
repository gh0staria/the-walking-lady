TheWalkingLady.GameOverScreen = function (game) {};

var restartButton;
var quitButton;

TheWalkingLady.GameOverScreen.prototype = {
	create: function () {
		//  Set the screen's background color
		this.stage.backgroundColor = '#ffedb7';
		
		//  Stop the game music
		backgroundSongs.stop('gameMusic');
		//  Set the variable so we can check it later
		gameMusicIsPlaying = false;
		//  Play game over sound
		soundEffects = this.add.sound('soundEffects');
		soundEffects.addMarker('gameOver', .72, 3.6, 1, false);
		soundEffects.play('gameOver');
		
		//  Add the restart button
		restartButton = this.add.sprite(100, 250, 'buttonAtlas');
		restartButton.frameName = 'btn_Restart';
		//  Make it clickable
		restartButton.inputEnabled = true;
		//  Run this function when we click it:
		restartButton.events.onInputDown.add(function() {
			//  Reset variables
			score = 0;
			speedNumber = 2;
			lives = 3;
			randArrayNumber = 2;
			//  Cut off the sound effect if it's still playing
			soundEffects.stop('gameOver');
			//  Restart the game
			this.state.start('Game');
		}, this);
		
		//  Add the quit button
		quitButton = this.add.sprite(100, 360, 'buttonAtlas');
		quitButton.frameName = 'btn_Quit';
		//  Make it clickable
		quitButton.inputEnabled = true;
		//  Run this function when we click it:
		quitButton.events.onInputDown.add(function() {
			//  Reset variables
			score = 0;
			speedNumber = 2;
			lives = 3;
			randArrayNumber = 2;
			//  Cut off the sound effect if it's still playing
			soundEffects.stop('gameOver');
			//  Play the main menu music on a loop
			backgroundSongs = this.add.audio('backgroundMusic');
			backgroundSongs.addMarker('menuMusic', 0, 188.09, 1, true);
			backgroundSongs.play('menuMusic');
			//  Set the variable so we can check it later
			menuMusicIsPlaying = true;
			
			//  Go to the main menu
			this.state.start('MainMenu');
		}, this);
		
		//  Add text to display
		this.add.text(100, 100, "GAME OVER!");
		this.add.text(100, 125, "Your score was:");
		this.add.text(100, 150, score);
	}
};
