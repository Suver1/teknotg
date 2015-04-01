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
    playTheGame: function() {
        this.game.state.start("TgGame");
    }
};
