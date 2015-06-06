
BasicGame.MainMenu = function (game) {};

BasicGame.MainMenu.prototype = {

	create: function () {
		//	MainMenu setup goes here
	},

	update: function () {
		//	Do some nice funky main menu effect here
	},

	startGame: function (pointer) {
		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');
	}
};
