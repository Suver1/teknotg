var Level02 = function() {};

Level02.prototype = Object.create(Level.prototype);
Level02.prototype.levelName = 'Level 02';
Level02.prototype.levelTilemap = 'level02';
Level02.prototype.initialRunSpeed = 350;
Level02.prototype.runSpeedIncrement = 40;

Level02.prototype.onFinish = function() {
    // this.game.state.start parameters:
    // 1. Name of the state to start,
    // 2. clearWorld (default true) clears the World display list fully (but not the Stage, so if you have added your own objects to the Stage they will need managing directly).
    // 3. clearCache (default false) clears all loaded assets.
    // 4. All other parameters from the fourth are variables that will be passed to the init function (if it has one). We pass the score to the GameOver state.
    this.game.state.start("Level03", true, false);
};

Level02.prototype.constructor = Level02;
