
BasicGame.Game = function (game) {};

var score = 0;
var scoreText;
var spawnTimer;
var faller;

function collectItem(lady, item) {
	item.kill();
	score += 10;
	scoreText.text = 'Score: ' + score;
}

function createFaller() {
	var itemsArray = ['potion', 'cheese', 'bread', 'coin', 'gem'];
	//add cheese
	faller = this.add.sprite(this.world.randomX, -100, itemsArray[Math.floor(Math.random() * 5)]);
	faller.anchor.set(0.5);
	//cheese physics
	this.physics.enable(faller, Phaser.Physics.ARCADE);
	items.add(faller);
	setGrav();
}

function gameOver() {
	//game over text
	var gameOverText = this.add.text(this.world.centerX, 200, 'GAME OVER', {fontSize: '36px', fill: '#000'});
	gameOverText.anchor.set(0.5);

	var replay = this.add.text(this.world.centerX, 225, 'refresh page to replay', {fontSize: '16px', fill: '#000'});
	replay.anchor.set(0.5);
	//pause game
	this.game.paused = true;
}

function setGrav() {
	if (score >= 0 && score <= 99) {
		faller.body.gravity.y = 100;
	}
	if (score >= 100 && score <= 199) {
		faller.body.gravity.y = 150;
	}
	if (score >= 200 && score <= 299) {
		faller.body.gravity.y = 200;
	}
	if (score >= 300 && score <= 399) {
		faller.body.gravity.y = 250;
	}
	if (score >= 400 && score <= 499) {
		faller.body.gravity.y = 300;
	}
	if (score >= 500 && score <= 599) {
		faller.body.gravity.y = 350;
	}
	if (score >= 600 && score <= 250) {
		faller.body.gravity.y = 400;
	}
	if (score >= 700) {
		faller.body.gravity.y = 450;
	}
}

BasicGame.Game.prototype = {
	create: function () {
		this.stage.backgroundColor = '#ffedb7';
		this.physics.startSystem(Phaser.Physics.ARCADE);

		//add + setup floor
		floor = this.add.sprite(0, this.world.height - 32, 'floor');
		this.physics.arcade.enable(floor);
		floor.body.immovable = true;

		//add + setup lady
		lady = this.add.sprite(32, this.world.height - 94, 'lady');
		lady.scale.setTo(2, 2);
		lady.smoothed = false;
		//lady physics
		this.physics.arcade.enable(lady);
		lady.body.gravity.y = 300;
		lady.body.collideWorldBounds = true;
		//lady animations
		lady.animations.add('left', [10, 9, 11, 9], 7, true);
		lady.animations.add('right', [4, 5, 3], 7, true);

		//create items group
		items = this.add.group();
		items.enableBody = true;

		//score
		scoreText = this.add.text(8, 8, 'Score: 0', {fontSize: '14px', fill: '#000'});
		//timer
		this.time.events.repeat(Phaser.Timer.SECOND * 2, 1000, createFaller, this);
    },
	
	update: function () {
        cursors = this.input.keyboard.createCursorKeys();
		lady.body.velocity.x = 0; // reset movement

		//key events
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
		//collision checking
		this.physics.arcade.overlap(lady, items, collectItem, null, this);
		this.physics.arcade.overlap(items, floor, gameOver, null, this);

		this.physics.arcade.collide(lady, floor);
		this.physics.arcade.collide(items, floor);
		this.physics.arcade.collide(faller, floor);
    }
};
