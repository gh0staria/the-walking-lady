
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
		this.load.spritesheet('lady', 'assets/sprites/sh_Lady.png', 20, 31);
		this.load.image('floor', 'assets/sprites/spr_Floor.png');
		this.load.image('cupcake', 'assets/sprites/spr_Cupcake.png');
		this.load.image('donut', 'assets/sprites/spr_Donut.png');
		this.load.image('muffin', 'assets/sprites/spr_Muffin.png');
		this.load.image('pretzel', 'assets/sprites/spr_Pretzel.png');
		this.load.image('roll', 'assets/sprites/spr_Roll.png');
		this.load.image('bagOfFlour', 'assets/sprites/spr_BagOfFlour.png');
		this.load.image('powerup', 'assets/sprites/spr_Powerup.png');
		this.load.image('badItem', 'assets/sprites/spr_BadItem.png');
		this.load.image('heart', 'assets/sprites/spr_Heart.png');
		
		// Load buttons
		this.load.image('playBtn', 'assets/buttons/btn_Play.png');
		this.load.image('helpBtn', 'assets/buttons/btn_HowToPlay.png');
		this.load.image('aboutBtn', 'assets/buttons/btn_Credits.png');
		this.load.image('quitBtn', 'assets/buttons/btn_Quit.png');
		this.load.image('restartBtn', 'assets/buttons/btn_Restart.png');
		//this.load.image('resumeBtn', 'assets/buttons/btn_Resume.png');
		this.load.image('gotoMenuBtn', 'assets/buttons/btn_Back.png');
		this.load.image('pauseBtn', 'assets/buttons/btn_Pause.png');
		
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
