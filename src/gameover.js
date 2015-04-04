var GameOver = function(game) {

};

GameOver.prototype = {
    create: function(game, currentScore) {
        var bg = this.game.add.sprite(0, 0, 'background');
            bg.fixedToCamera = true;
        style = {fontSize: '32px', fill: '#000'};
        game.add.text(16, 16, 'Congratulations!\nYou made it in ' + this.game.scoreManager.currentTime / 1000 + ' seconds', style);
        //game.add.text(16, 16, 'time: ' + this.game.scoreManager.currentTime / 1000 + ' sec ', style);
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
