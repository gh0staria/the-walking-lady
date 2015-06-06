
BasicGame.Preloader = function (game) {

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {
		//	These are the assets we loaded in Boot.js
		//  Once again I don't have any preloader stuff right now.

		//	This sets the preloadBar sprite as a loader sprite.
		//this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		this.load.spritesheet('lady', 'imgs/lady.png', 20, 31);
		this.load.image('floor', 'imgs/floor.png');

		this.load.image('potion', 'imgs/potion.png');
		this.load.image('cheese', 'imgs/cheese.png');
		this.load.image('bread', 'imgs/bread.png');
		this.load.image('coin', 'imgs/coin.png');
		this.load.image('gem', 'imgs/gem.png');
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
