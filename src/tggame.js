var TgGame = function(game) {
    // insert global variables here
    score = 0;
}

TgGame.prototype = {
    create: function() {
        console.log("tggame");
        score = 1;
        var gameOver = this.game.add.button(this.game.width / 2, this.game.height / 2, "star", this.gameOverScreen, this);
    },
    update: function() {
        // runs every frame. insert game logic here.
    },
    gameOverScreen: function() {
        // this.game.state.start parameters: 
        // 1. Name of the state to start,
        // 2. clearWorld (default true) clears the World display list fully (but not the Stage, so if you have added your own objects to the Stage they will need managing directly).
        // 3. clearCache (default false) clears all loaded assets.
        // 4. All other parameters from the fourth are variables that will be passed to the init function (if it has one). We pass the score to the GameOver state.
        this.game.state.start("GameOver", true, false, score);
    }
}
