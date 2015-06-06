
BasicGame.MainMenu = function (game) {};

var menuTitle;
var play;
var help;
var about;

function startGame() {
	this.state.start('Game');
	console.log('game state start');
}

function goToHelp() {
	console.log('I haven\'t added a help page yet!');
}

function goToAbout() {
	console.log('I haven\'t added an about page yet!');
}

BasicGame.MainMenu.prototype = {

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
	}
};
