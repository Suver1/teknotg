var Level01 = function(game) { };

Level01.prototype = {
    create: function(score) {
        var jump = false;
        console.log("Level 01");
        var gameOver = this.game.add.button(this.game.width / 2, this.game.height / 2, "star", this.gameOverScreen, this);
        // Set world dimensions
        // TODO replace last two parameters with the maps width.
        this.game.world.setBounds(0, 0, 2000, 2000);

        this.map = this.game.add.tilemap('teknotg_testlevel02');
        this.map.addTilesetImage('simples_pimples_32px', 'simples_pimples_32px');
        //this.map.scale = {x: 2, y: 2};

        this.groundLayer = this.map.createLayer('Ground');
        //this.groundLayer.scale = {x: 2, y: 2};
        this.map.setCollisionBetween(1, 2000, true, this.groundLayer);
        this.blockLayer = this.map.createLayer('Blocks');
        //this.blockLayer.scale = {x: 2, y: 2};
        this.map.setCollisionBetween(1, 2000, true, this.blockLayer);

        // Ground setup
        platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, game.world.height - 64, "platform");
        ground.body.immovable = true;

        // Player setup
        this.player = this.game.add.sprite(150, 150, "player1");
        this.game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 600;
        this.player.isInAir = true; //Maybe remove if player starts on ground

        // Camera setup - Camera stops following player when it hits world bounds.
        this.game.camera.follow(this.player);

        // Input setup
        this.cursors = game.input.keyboard.createCursorKeys();
        this.game.input.onDown.add(this.jump, this);
        this.cursors.up.onDown.add(this.jump, this);

        if (score)
            this.score = score;

        this.createItems();

    },
    update: function() {
        // runs every frame. insert game logic here.
        this.player.body.velocity.x = 150;
        this.game.physics.arcade.collide(this.player, platforms);
        this.game.physics.arcade.collide(this.player, this.groundLayer, this.playerTouchGround, undefined, this);
        this.game.physics.arcade.collide(this.player, this.blockLayer, this.playerTouchGround, undefined, this);
        this.game.physics.arcade.overlap(this.player, this.items, this.playerPickupDiamond, undefined, this);
    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    gameOverScreen: function() {
        // this.game.state.start parameters:
        // 1. Name of the state to start,
        // 2. clearWorld (default true) clears the World display list fully (but not the Stage, so if you have added your own objects to the Stage they will need managing directly).
        // 3. clearCache (default false) clears all loaded assets.
        // 4. All other parameters from the fourth are variables that will be passed to the init function (if it has one). We pass the score to the GameOver state.
        this.game.state.start("GameOver", true, false, this.score);
    },
    playerTouchGround: function(player, ground) {
        player.isInAir = false;

        var deltaX = player.position.x - ground.worldX,
            deltaY = player.position.y - ground.worldY;

        var radians = Math.atan2(deltaY, deltaX);
        if (!(radians > -(5*Math.PI/6) && radians < -(Math.PI/6)))
            this.game.state.restart(true, false, this.score);
    },
    jump: function(context, pointerEvent) {
        if (this.player.isInAir === false) {
            this.player.body.velocity.y = -350;
            this.player.isInAir = true;
        }
    },
    createItems: function() {
        var self = this;

        this.items = this.game.add.group();
        this.items.enableBody = true;
        this.map.objects['Items'].forEach(function(item) { var displayObject = self.items.create(item.x, item.y - self.map.tileHeight, 'diamond'); displayObject.height = displayObject.width = 32; return displayObject; });
    },
    playerPickupDiamond: function(player, diamond) {
        diamond.destroy();
        this.score++;
    }
};
