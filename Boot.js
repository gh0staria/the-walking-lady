var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {
    init: function () {
        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. I didn't disable it.
        this.stage.disableVisibilityChange = false;
    },
    preload: function () {
        //  Here we load the assets required for our preloader.
		// I currently have no preloader assets.
    },
    create: function () {
        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');
    }
};
