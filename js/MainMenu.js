TheWalkingLady.MainMenu = function (game) {};

//  Set variables that need to be used
var menuBkgd
var play;
var help;
var about;
var menuMusicIsPlaying = false;

TheWalkingLady.MainMenu.prototype = {
	create: function () {
		//  Set the screen's background
		menuBkgd = this.add.sprite(0, 0, 'mainMenu');
		
		//  Add play button
		play = this.add.sprite(10, 230, 'buttonAtlas');
		play.frameName = 'btn_Play';
		//  Make it clickable
		play.inputEnabled = true;
		//  Run this function when you click it:
		play.events.onInputDown.add(function() {
			//  Switch to the game state and stop the MainMenu music
			this.state.start('Game');
			backgroundSongs.stop('menuMusic');
		}, this);
		
		//  Add how to play button
		help = this.add.sprite(10, 335, 'buttonAtlas');
		help.frameName = 'btn_HowToPlay';
		//  Make it clickable
		help.inputEnabled = true;
		//  Run this function when you click it:
		help.events.onInputDown.add(function() {
			//  Switch to the help state
			this.state.start('Help');
		}, this);
		
		//  Add credits button
		about = this.add.sprite(10, 415, 'buttonAtlas');
		about.frameName = 'btn_Credits';
		//  Make it clickable
		about.inputEnabled = true;
		//  Run this function when you click it:
		about.events.onInputDown.add(function() {
			//  Switch to the about state
			this.state.start('About');
		}, this);
	},
	
	update: function() {
		//  Check if music is playing
		if (menuMusicIsPlaying === false) {
			//  If it isn't, play the music on a loop
			backgroundSongs = this.add.audio('backgroundMusic');
			backgroundSongs.addMarker('menuMusic', 0, 188.09, 1, true);
			backgroundSongs.play('menuMusic');
			//  And set the variable to true so later we can check if it's playing
			menuMusicIsPlaying = true;
		}
	}
};
