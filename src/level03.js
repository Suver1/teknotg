var Level03 = function() {};

Level03.prototype = Object.create(Level.prototype);
Level03.prototype.levelName = 'Level 03';
Level03.prototype.levelTilemap = 'level03';
Level03.prototype.initialRunSpeed = 350;
Level03.prototype.runSpeedIncrement = 40;

Level03.prototype.onFinish = function() {
    // this.game.state.start parameters:
    // 1. Name of the state to start,
    // 2. clearWorld (default true) clears the World display list fully (but not the Stage, so if you have added your own objects to the Stage they will need managing directly).
    // 3. clearCache (default false) clears all loaded assets.
    // 4. All other parameters from the fourth are variables that will be passed to the init function (if it has one). We pass the score to the GameOver state.
    this.game.scoreManager.timeElapsed = this.game.scoreManager.getTimeElapsed();
    this.game.scoreManager.totalScore = this.game.scoreManager.getCurrentScore();
    this.game.state.start("GameOver", true, false);
};

Level03.prototype.constructor = Level03;
