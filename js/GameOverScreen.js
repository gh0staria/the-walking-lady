TheWalkingLady.GameOverScreen = function (game) {};

var restartButton;
var quitButton;
var scoreText;

TheWalkingLady.GameOverScreen.prototype = {
	create: function () {
		//  Set the screen's background
		this.add.sprite(0, 0, 'gameOverScreen');
		
		//  Stop the game music
		backgroundSongs.stop('gameMusic');
		//  Set the variable so we can check it later
		gameMusicIsPlaying = false;
		//  Play game over sound
		soundEffects = this.add.sound('soundEffects');
		soundEffects.addMarker('gameOver', .72, 3.6, 1, false);
		soundEffects.play('gameOver');
		
		//  Add the restart button
		restartButton = this.add.sprite(100, 320, 'buttonAtlas');
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
		quitButton = this.add.sprite(100, 400, 'buttonAtlas');
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
		
		scoreText = this.add.text(10, 150, score);
		scoreText.font = 'monospace';
		scoreText.fontSize = 100;
		scoreText.fill = '#eab22a'
	}
};
