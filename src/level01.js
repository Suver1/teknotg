var Level01 = function() {};

Level01.prototype = Object.create(Level.prototype);
Level01.prototype.levelName = 'Level 01';
Level01.prototype.levelTilemap = 'level01';
Level01.prototype.initialRunSpeed = 350;
Level01.prototype.runSpeedIncrement = 100;

Level01.prototype.onFinish = function() {
    this.game.state.start("Level02", true, false);
};

Level01.prototype.constructor = Level01;
