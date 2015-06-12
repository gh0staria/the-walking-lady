
TheWalkingLady.Preloader = function (game) {
	this.ready = false;
};

TheWalkingLady.Preloader.prototype = {
	preload: function () {
		//	Set preloader bar stuff
		this.preloadBar = this.add.sprite(100, 100, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		//	Load basic sprites
		this.load.spritesheet('lady', 'assets/imgs/player_lady.png', 20, 31);
		this.load.image('floor', 'assets/imgs/sprite_floor.png');
		
		//  Load falling items
		this.load.image('potion', 'assets/imgs/item_potion.png');
		this.load.image('cheese', 'assets/imgs/item_cheese.png');
		this.load.image('bread', 'assets/imgs/item_bread.png');
		this.load.image('coin', 'assets/imgs/item_coin.png');
		this.load.image('gem', 'assets/imgs/item_gem.png');
		
		//  Load powerups/bad items
		this.load.image('powerup', 'assets/imgs/powerup_speed.png');
		this.load.image('badItem', 'assets/imgs/powerup_slow.png');
		
		// Load menu buttons/images
		this.load.image('gameTitle', 'assets/buttons/placeholder_game_title.png');
		this.load.image('playBtn', 'assets/buttons/placeholder_play_button.png');
		this.load.image('helpBtn', 'assets/buttons/placeholder_help_button.png');
		this.load.image('aboutBtn', 'assets/buttons/placeholder_about_button.png');
		this.load.image('quitBtn', 'assets/buttons/placeholder_quit_button.png');
		this.load.image('restartBtn', 'assets/buttons/placeholder_restart_button.png');
		this.load.image('resumeBtn', 'assets/buttons/placeholder_resume_button.png');
		this.load.image('gotoMenuBtn', 'assets/buttons/placeholder_goto_menu_button.png');
		this.load.image('pauseBtn', 'assets/buttons/placeholder_pause_button.png');
		this.load.image('heart', 'assets/buttons/placeholder_pause_button.png');
		
		//  Load music/sound effects
		this.load.audio('titleMusic', ['assets/audio/music_Title.ogg', 'assets/audio/music_Title.m4a']);
		this.load.audio('gameMusic', ['assets/audio/music_Gameplay.ogg', 'assets/audio/music_Gameplay.m4a']);
		this.load.audio('gameOverSound', 'assets/audio/sound_GameOver.ogg');
		this.load.audio('collectItemSound', 'assets/audio/sound_CollectItem.ogg');
		this.load.audio('powerupSound', 'assets/audio/sound_Powerup.ogg');
		this.load.audio('badItemSound', 'assets/audio/sound_BadItem.ogg');
		this.load.audio('lostLifeSound', 'assets/audio/sound_LostLife.ogg');
	},

	create: function () {
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes.
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
		//	Basically this will wait for our audio file to be decoded before proceeding to the MainMenu.
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
};
