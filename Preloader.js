
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
		this.load.spritesheet('lady', 'assets/imgs/lady.png', 20, 31);
		this.load.image('floor', 'assets/imgs/floor.png');
		
		//  Load items
		this.load.image('potion', 'assets/imgs/potion.png');
		this.load.image('cheese', 'assets/imgs/cheese.png');
		this.load.image('bread', 'assets/imgs/bread.png');
		this.load.image('coin', 'assets/imgs/coin.png');
		this.load.image('gem', 'assets/imgs/gem.png');
		
		// Load menu stuff
		this.load.image('gameTitle', 'assets/buttons/placeholder_game_title.png');
		this.load.image('playBtn', 'assets/buttons/placeholder_play_button.png');
		this.load.image('helpBtn', 'assets/buttons/placeholder_help_button.png');
		this.load.image('aboutBtn', 'assets/buttons/placeholder_about_button.png');
		this.load.image('quitBtn', 'assets/buttons/placeholder_quit_button.png');
		this.load.image('restartBtn', 'assets/buttons/placeholder_restart_button.png');
		this.load.image('resumeBtn', 'assets/buttons/placeholder_resume_button.png');
		this.load.image('gotoMenuBtn', 'assets/buttons/placeholder_goto_menu_button.png');
		this.load.image('pauseBtn', 'assets/buttons/placeholder_pause_button.png');
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
