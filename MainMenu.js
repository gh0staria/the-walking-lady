
BasicGame.MainMenu = function (game) {};

var menuTitle;
var play;
var help;
var about;

BasicGame.MainMenu.prototype = {

	create: function () {
		this.stage.backgroundColor = '#ffedb7';
		menuTitle = this.add.sprite(0, 0, 'gameTitle');
		play = this.add.sprite(100, 180, 'playBtn');
		help = this.add.sprite(100, 285, 'helpBtn');
		about = this.add.sprite(100, 390, 'aboutBtn');
		
		//	And start the actual game
		//this.state.start('Game');
		//console.log('start game state');
	}
};
