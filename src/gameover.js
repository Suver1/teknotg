var GameOver = function(game) {

};

GameOver.prototype = {
    init: function(score) {
        alert("Your score: " + score);
    },
    create: function() {
        console.log("gameOver");
        // place game over stuff here
        var flag = this.game.add.button(this.game.width / 2, this.game.height / 2, "flag", this.playTheGame, this);
    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    playTheGame: function() {
        this.game.state.start("Level01");
    }
};
