var GameOver = function(game) {

};

GameOver.prototype = {
    create: function(game, currentScore) {

        var bg = this.game.add.sprite(0, 0, 'background');

        bg.fixedToCamera = true;

        style = {fontSize: '32px', fill: '#FFFFFF'};

        game.add.text(this.game.width / 4, 100,
                      'Congratulations!\nYou made it in ' + this.game.scoreManager.currentTime / 1000 + ' seconds, \n with a score of ' + this.game.scoreManager.getCurrentScore(),
                      style);

        this.game.scoreManager.sendScore();
        this.game.scoreManager.resetScore();

        setTimeout(function() {
            this.game.state.start("StartMenu");

            this.game.backgroundMusic.stop();

        }, 3000);

    },

    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    }

};
