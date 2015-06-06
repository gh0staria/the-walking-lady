
TheWalkingLady.Preloader = function (game) {

	this.ready = false;

};

TheWalkingLady.Preloader.prototype = {

	preload: function () {
		//	These are the assets we loaded in Boot.js
		this.preloadBar = this.add.sprite(100, 100, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		this.load.setPreloadSprite(this.preloadBar);

		//	Load basics
		this.load.spritesheet('lady', 'assets/lady.png', 20, 31);
		this.load.image('floor', 'assets/floor.png');
		
		//  Load items
		this.load.image('potion', 'assets/potion.png');
		this.load.image('cheese', 'assets/cheese.png');
		this.load.image('bread', 'assets/bread.png');
		this.load.image('coin', 'assets/coin.png');
		this.load.image('gem', 'assets/gem.png');
		
		// Load menu stuff
		this.load.image('gameTitle', 'assets/placeholder_game_title.png');
		this.load.image('playBtn', 'assets/placeholder_play_button.png');
		this.load.image('helpBtn', 'assets/placeholder_help_button.png');
		this.load.image('aboutBtn', 'assets/placeholder_about_button.png');
		this.load.image('quitBtn', 'assets/placeholder_quit_button.png');
		this.load.image('restartBtn', 'assets/placeholder_restart_button.png');
		this.load.image('resumeBtn', 'assets/placeholder_resume_button.png');
		this.load.image('gotoMenuBtn', 'assets/placeholder_goto_menu_button.png');
	},

	create: function () {
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes. This is disabled because I currently have no music.
		//this.preloadBar.cropEnabled = false;
		
		this.state.start('MainMenu');
		console.log('start main menu state');
	}/*,

	update: function () {
		//	Basically this will wait for our audio file to be decoded before proceeding to the MainMenu.
		//  It's disabled right now because I currently have no music.
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
*/
};
