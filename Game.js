
TheWalkingLady.Game = function (game) {};

var score = 0;
var scoreText;
var spawnTimer;
var faller;
var addedGrav = 0;
var w = 400;
var h = 500;

function collectItem(lady, item) {
	item.kill();
	score += 10;
	scoreText.text = 'Score: ' + score;
	addedGrav += 10;
	faller.body.gravity.y = 100 + addedGrav;
}

function createFaller() {
	var itemsArray = ['potion', 'cheese', 'bread', 'coin', 'gem'];
	//  add item
	faller = this.add.sprite(this.world.randomX, -100, itemsArray[Math.floor(Math.random() * 5)]);
	faller.anchor.set(0.5);
	//  item physics
	this.physics.enable(faller, Phaser.Physics.ARCADE);
	items.add(faller);
	faller.body.gravity.y = 100 + addedGrav;
}

function gameOver() {
	this.state.start('GameOverScreen');
	console.log('start game over screen state');
}

function pauseGame() {
	//  Pause the game
	this.game.paused = true;
	console.log('game paused');
	
	// Add the resume button
	var resumeButton = this.add.sprite(w / 2, h / 2, 'resumeBtn');
	resumeButton.anchor.set(0.5);
	this.input.onDown.add(unpause, self);
	
	function unpause(event) {
		// Calculate the corners of the menu
		var x1 = w / 2 - 200 / 2, x2 = w / 2 + 200 / 2,
			y1 = h / 2 - 100 / 2, y2 = h / 2 + 100 / 2;

		// Check if the click was inside the menu
		if (event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2) {
			// Remove the menu and the label
			resumeButton.destroy();
			// Unpause the game
			this.game.paused = false;
		}
		//  Add the restart button
		//this.add.sprite(100, 210, 'restartBtn');

		//  Add the quit button
		//this.add.sprite(100, 320, 'quitBtn');
	}
}

TheWalkingLady.Game.prototype = {
	create: function () {
		this.stage.backgroundColor = '#ffedb7';
		this.physics.startSystem(Phaser.Physics.ARCADE);

		//  add + setup floor
		floor = this.add.sprite(0, this.world.height - 32, 'floor');
		this.physics.arcade.enable(floor);
		floor.body.immovable = true;

		//  add + setup lady
		lady = this.add.sprite(this.world.width / 2, this.world.height - 94, 'lady');
		lady.anchor.set(0.5);
		lady.scale.setTo(2, 2);
		lady.smoothed = false;
		//  lady physics
		this.physics.arcade.enable(lady);
		lady.body.gravity.y = 300;
		lady.body.collideWorldBounds = true;
		//  lady animations
		lady.animations.add('left', [10, 9, 11, 9], 7, true);
		lady.animations.add('right', [4, 5, 3], 7, true);

		//  create items group
		items = this.add.group();
		items.enableBody = true;

		//  score
		scoreText = this.add.text(8, 8, 'Score: 0', {fontSize: '14px', fill: '#000'});
		//  timer
		this.time.events.repeat(Phaser.Timer.SECOND * 2, 1000, createFaller, this);
		
		//  Add pause button
		var pauseButton = this.add.sprite(372, 3, 'pauseBtn');
		pauseButton.inputEnabled = true;
		pauseButton.events.onInputDown.add(pauseGame, this);
	},
	
	update: function () {
        cursors = this.input.keyboard.createCursorKeys();
		lady.body.velocity.x = 0; // reset movement

		//  key events
		if (cursors.left.isDown) {
			lady.body.velocity.x = -200;
			lady.animations.play('left');
		} else if (cursors.right.isDown) {
			lady.body.velocity.x = 200;
			lady.animations.play('right');
		} else {
			lady.animations.stop();
			lady.frame = 7;
		}
		//  collision checking
		this.physics.arcade.overlap(lady, items, collectItem, null, this);
		this.physics.arcade.overlap(items, floor, gameOver, null, this);

		this.physics.arcade.collide(lady, floor);
		this.physics.arcade.collide(items, floor);
		this.physics.arcade.collide(faller, floor);
    }
};
