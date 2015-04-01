// Create the start menu, accept settings etc.
var StartMenu = function(game) {

};

StartMenu.prototype = {
    create: function() {
        var startMenu = this.game.add.button(50, 50, "star");
        var playButton = this.game.add.button(100, 100, "star", this.playTheGame, this);
        console.log("startmenu");
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
