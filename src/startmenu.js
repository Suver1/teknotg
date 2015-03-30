// Create the start menu, accept settings etc.
var startMenu = function(game){}

startMenu.prototype = {
    create: function() {
        var startMenu = this.game.add.button(50, 50, "star");
        var playButton = this.game.add.button(100, 100, "star", this.playTheGame, this);
        console.log("startmenu");
    },
    playTheGame: function() {
        this.game.state.start("TgGame");
    }
}
