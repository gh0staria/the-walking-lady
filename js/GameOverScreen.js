TheWalkingLady.GameOverScreen = function (game) {};

//  Set up our variables
var gameOverSoundEffect;

TheWalkingLady.GameOverScreen.prototype = {
	create: function () {
		//  Set the screen's background color
		this.stage.backgroundColor = '#ffedb7';
		
		//  Stop the game music
		gameMusic.stop();
		//  Set the variable so we can check it later
		gameMusicIsPlaying = false;
		//  Play game over sound
		gameOverSoundEffect = this.add.sound('gameOverSound');
		gameOverSoundEffect.play();
		
		//  Add the restart button
		var restartButton = this.add.sprite(100, 250, 'restartBtn');
		//  Make it clickable
		restartButton.inputEnabled = true;
		//  Run this function when we click it:
		restartButton.events.onInputDown.add(function() {
			//  Reset variables
			powerupSpawnInterval = 10;
			speedNumber = 2;
			badItemSpawnInterval = 15;
			score = 0;
			//  Cut off the sound effect if it's still playing
			gameOverSoundEffect.stop();
			//  Restart the game
			this.state.start('Game');
		}, this);
		
		//  Add the quit button
		var quitButton = this.add.sprite(100, 360, 'quitBtn');
		//  Make it clickable
		quitButton.inputEnabled = true;
		//  Run this function when we click it:
		quitButton.events.onInputDown.add(function() {
			//  Reset variables
			powerupSpawnInterval = 10;
			speedNumber = 2;
			badItemSpawnInterval = 15;
			score = 0;
			//  Cut off the sound effect if it's still playing
			gameOverSoundEffect.stop();
			//  Play the main menu music on a loop
			menuMusic.play();
			menuMusic.loop = true;
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
