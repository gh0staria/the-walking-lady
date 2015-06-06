
BasicGame.MainMenu = function (game) {};

BasicGame.MainMenu.prototype = {

	create: function () {
		//	And start the actual game
		this.state.start('Game');
		console.log('start game state');
	}
};
