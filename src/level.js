var Level = function(game) { };

Level.prototype.create = function(game) {
    var jump = false;
    //var gameOver = this.game.add.button(this.game.width / 2, this.game.height / 2, "star", this.gameOverScreen, this);
    // Set world dimensions
    // TODO replace last two parameters with the maps width.
    this.game.world.setBounds(-300, -300, 20000, 2000);

    this.map = this.game.add.tilemap(this.levelTilemap);
    this.map.addTilesetImage('iTideSprites', 'iTideSprites');
    //this.map.scale = {x: 2, y: 2};

    var bg = this.game.add.sprite(0, 0, 'background');
    bg.fixedToCamera = true;

    this.groundLayer = this.map.createLayer('Ground');
    //this.groundLayer.scale = {x: 2, y: 2};
    this.map.setCollisionBetween(1, 2000, true, this.groundLayer);
    this.blockLayer = this.map.createLayer('Blocks');
    //this.blockLayer.scale = {x: 2, y: 2};
    this.map.setCollisionBetween(1, 2000, true, this.blockLayer);

    // Player setup
    this.player = this.game.add.sprite(80, 300, "player1");
    this.game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 2500;
    this.player.isInAir = true; //Maybe remove if player starts on ground
    this.player.runSpeed = this.initialRunSpeed;
    this.player.incrementRunSpeed = this.runSpeedIncrement;
    this.player.lastFrameVelocity = this.runSpeed;
    // Animate
    this.player.animations.frameRateStart = 8;
    this.player.animations.frameRateIncrement = 1;
    this.player.animations.frameRate = this.player.animations.frameRateStart;
    this.player.animations.add('straight', [0,1,2,3], this.player.animations.frameRateStart, true);
    this.player.animations.add('crash', [4,5,6], this.player.animations.frameRateStart, true);
    this.player.animations.play('straight');

    // Camera setup - Camera stops following player when it hits world bounds.
    this.game.camera.target = this.player;
    this.game.camera.height = this.game.height * 1.5;
    this.game.camera.width = this.game.width / 4;

    var camera = this.game.camera;
    helper = Math.max(camera.width, camera.height) / 12;
    this.game.camera.deadzone = new Phaser.Rectangle((camera.width - helper) / 2, (camera.height - helper) / 2, helper, helper);

    // Input setup
    this.cursors = game.input.keyboard.createCursorKeys();
    this.game.input.onDown.add(this.jump, this);
    this.cursors.up.onDown.add(this.jump, this);

    this.createItems();

    this.coinSound = this.game.add.audio('coin');
    this.coinSound.volume = this.muteAllSounds ? 0 : 0.2;

    if (!this.game.backgroundMusic && !this.game.muteAllSounds) {
        this.game.backgroundMusic = this.game.add.audio('game');
        this.game.backgroundMusic.play();
    }


    if (typeof this.timeStarted == 'undefined') {
        this.timeStarted = Date.now();
        this.game.scoreManager.setTimeStarted();
    }
    this.timeElapsedText = this.game.add.text(700, 20, (Date.now() - this.timeStarted)/1000, {fill: '#ffffff'});
    this.timeElapsedText.fixedToCamera = true;
};

Level.prototype.update = function() {
    // runs every frame. insert game logic here.
    this.player.body.velocity.x = this.player.runSpeed;

    this.game.physics.arcade.collide(this.player, this.groundLayer, this.playerTouchGround, undefined, this);
    this.game.physics.arcade.collide(this.player, this.blockLayer, this.playerTouchGround, undefined, this);
    this.game.physics.arcade.overlap(this.player, this.items, this.playerOverlapItem, undefined, this);

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
        this.restartLevel();
    }
    if (this.player.body.velocity.x > 5 && this.player.lastFrameVelocity > 5) {
        this.player.animations.play('straight', this.player.animations.frameRate);
    } else {
        this.player.animations.play('crash', this.player.animations.frameRate);
        // starte timer
    }
    this.player.lastFrameVelocity = this.player.body.velocity.x; // Needs to be after velocity check
};
Level.prototype.render = function() {
    this.timeElapsedText.setText((Date.now() - this.timeStarted)/1000);
    if (this.game.debugMode) {
        this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        this.game.debug.text('speed: ' + this.player.body.velocity.x, 0, 32, '#00FF00');

        // Camera deadzone (context require Phaser.CANVAS)
        //var zone = this.game.camera.deadzone;
        //this.game.context.fillStyle = 'rgba(255, 0, 0, 0.5)';
        //this.game.context.fillRect(zone.x, zone.y, zone.width, zone.height);
    }
};
Level.prototype.gameOverScreen = function() {
    // this.game.state.start parameters:
    // 1. Name of the state to start,
    // 2. clearWorld (default true) clears the World display list fully (but not the Stage, so if you have added your own objects to the Stage they will need managing directly).
    // 3. clearCache (default false) clears all loaded assets.
    // 4. All other parameters from the fourth are variables that will be passed to the init function (if it has one). We pass the score to the GameOver state.
    this.game.state.start("Level02", true, false);
};
Level.prototype.playerTouchGround = function(player, ground) {
    var deltaX = player.position.x - ground.worldX,
        deltaY = player.position.y - ground.worldY;

    var radians = Math.atan2(deltaY, deltaX);
    if ((radians > -(Math.PI*5/6) && radians < -(Math.PI/6))) {
        player.isInAir = false;
    }
};
Level.prototype.jump = function(context, pointerEvent) {
    if (this.player.isInAir === false) {
        this.player.body.velocity.y = -650;
        this.player.isInAir = true;
    }
};
Level.prototype.createItems = function() {
    var self = this;

    this.items = this.game.add.group();
    this.items.enableBody = true;
    this.map.objects['Items'].forEach(function(item) {
        var displayObject = self.items.create(
            item.x,
            item.y - self.map.tileHeight,
            item.properties.sprite
        );

        displayObject.height = displayObject.width = 32;
        Object.keys(item.properties).forEach(function(key) {
            displayObject[key] = item.properties[key];
        });

        displayObject.itemType = item.type;
    });
};
Level.prototype.playerOverlapItem = function(player, item) {
    if (item.onOverlap)
        return item.onOverlap.call(this, player, item);

    switch(item.itemType) {
    case 'speed':
        this.coinSound.play();
        this.game.scoreManager.incrementScore();
        item.destroy();
        this.incrementPlayerSpeed();
        this.player.animations.frameRate = this.player.animations.frameRateStart +
            this.game.scoreManager.getCurrentScore() +
            this.player.animations.frameRateIncrement;
        break;
    case 'flag':
        if (this.onFinish)
            this.onFinish();
        else
            this.gameOverScreen();
        break;
    case 'kill':
        this.game.scoreManager.resetScore();
        this.restartLevel();
        break;
    }
};
Level.prototype.restartLevel = function() {
    this.game.scoreManager.resetScore();
    this.game.state.restart(true, false);
};
Level.prototype.incrementPlayerSpeed = function() {
    this.player.runSpeed += this.player.incrementRunSpeed;
};
