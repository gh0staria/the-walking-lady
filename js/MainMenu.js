TheWalkingLady.MainMenu = function (game) {};

//  Set variables that need to be used
var menuTitle;
var play;
var help;
var about;
var menuMusic;
var menuMusicIsPlaying = false;

TheWalkingLady.MainMenu.prototype = {
	create: function () {
		//  Set the screen's background color
		this.stage.backgroundColor = '#ffedb7';

		//  Add game title image
		menuTitle = this.add.sprite(0, 0, 'gameTitle');
		
		//  Add play button
		play = this.add.sprite(100, 180, 'playBtn');
		//  Make it clickable
		play.inputEnabled = true;
		//  Run this function when you click it:
		play.events.onInputDown.add(function() {
			//  Switch to the game state and stop the MainMenu music
			this.state.start('Game');
			menuMusic.stop();
		}, this);
		
		//  Add help button
		help = this.add.sprite(100, 285, 'helpBtn');
		//  Make it clickable
		help.inputEnabled = true;
		//  Run this function when you click it:
		help.events.onInputDown.add(function() {
			//  Switch to the help state
			this.state.start('Help');
		}, this);
		
		//  Add about button
		about = this.add.sprite(100, 390, 'aboutBtn');
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
			menuMusic = this.add.audio('titleMusic');
			menuMusic.loop = true;
			menuMusic.play();
			//  And set the variable to true so later we can check if it's playing
			menuMusicIsPlaying = true;
		}
	}
};
