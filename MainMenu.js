TheWalkingLady.MainMenu = function (game) {};

var menuTitle;
var play;
var help;
var about;
var menuMusic;
var musicPlaying = false;

function startGame() {
	this.state.start('Game');
	console.log('game state start');
	menuMusic.stop();
}

function goToHelp() {
	this.state.start('Help');
	console.log('help state start');
}

function goToAbout() {
	this.state.start('About');
	console.log('about state start');
}

TheWalkingLady.MainMenu.prototype = {

	create: function () {
		this.stage.backgroundColor = '#ffedb7';

		//  Add game title image
		menuTitle = this.add.sprite(0, 0, 'gameTitle');
		
		//  Add play button and set it up to be clicked on
		play = this.add.sprite(100, 180, 'playBtn');
		play.inputEnabled = true;
		play.events.onInputDown.add(startGame, this);
		
		//  Add help button and set it up to be clicked on
		help = this.add.sprite(100, 285, 'helpBtn');
		help.inputEnabled = true;
		help.events.onInputDown.add(goToHelp, this);
		
		//  Add about button and set it up to be clicked on
		about = this.add.sprite(100, 390, 'aboutBtn');
		about.inputEnabled = true;
		about.events.onInputDown.add(goToAbout, this);
	},
	update: function() {
		//  Play music
		if (musicPlaying === false) {
			menuMusic = this.add.audio('titleMusic');
			menuMusic.loop = true;
			menuMusic.play();
			musicPlaying = true;
		}
	}
};
