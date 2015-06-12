
TheWalkingLady.Preloader = function (game) {
	this.ready = false;
};

TheWalkingLady.Preloader.prototype = {
	preload: function () {
		//	Set preloader bar stuff
		this.preloaderBackground = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(100, 200, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		//  Load sprites
		this.load.spritesheet('lady', 'assets/sh_Lady.png', 20, 31);
		this.load.image('floor', 'assets/spr_Floor.png');
		this.load.atlasJSONHash('spriteAtlas', 'assets/SpritesSpritesheet.png', 'assets/SpritesSpritesheet.json');
		
		// Load buttons
		this.load.atlasJSONHash('buttonAtlas', 'assets/ButtonSpritesheet.png', 'assets/ButtonSpritesheet.json');
		
		//  Load Backgrounds
		this.load.image('creditsMenu', 'assets/backgrounds/bkgd_CreditsMenu.png');
		this.load.image('howToPlayMenu', 'assets/backgrounds/bkgd_HowToPlayMenu.png');
		this.load.image('mainMenu', 'assets/backgrounds/bkgd_MainMenu.png');
		
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
