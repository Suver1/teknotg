var Level01 = function(game) {
    // insert global variables here
    score = 0;
};

Level01.prototype = {
    create: function() {
        console.log("Level 01");
        score = 1;
        var gameOver = this.game.add.button(this.game.width / 2, this.game.height / 2, "star", this.gameOverScreen, this);

        // Ground setup
        platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, game.world.height - 64, "platform");
        ground.body.immovable = true;

        // Player setup
        player = this.game.add.sprite(150, 150, "player1");
        this.game.physics.arcade.enable(player);
        player.body.gravity.y = 600;
    },
    update: function() {
        // runs every frame. insert game logic here.
        game.physics.arcade.collide(player, platforms);
    },
    gameOverScreen: function() {
        // this.game.state.start parameters:
        // 1. Name of the state to start,
        // 2. clearWorld (default true) clears the World display list fully (but not the Stage, so if you have added your own objects to the Stage they will need managing directly).
        // 3. clearCache (default false) clears all loaded assets.
        // 4. All other parameters from the fourth are variables that will be passed to the init function (if it has one). We pass the score to the GameOver state.
        this.game.state.start("GameOver", true, false, score);
    }
};
